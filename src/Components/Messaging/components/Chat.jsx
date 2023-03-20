import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const Chat = ({ user, friends }) => {
  const [message, setMessage] = useState("");
  const [room_id, setRoom_id] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectedFriend = (friend) => {
    setSelectedFriend(friend);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message !== "") {
      const messageData = {
        room: room_id,
        icon: user.icon,
        author: user.name,
        messages: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("send_message", messageData, room_id);
      setMessages((prev) => {
        return [...prev, messageData];
      });
      setMessage("");
    }
  };

  useEffect(() => {
    if (selectedFriend) {
      const chatRoom = `chat_${[user.id, selectedFriend.id].sort().join("_")}`;
      socket.emit("join_room", chatRoom);
      setRoom_id(chatRoom);
    }
  }, [selectedFriend]);

  useEffect(() => {
    if (socket == null) return;

    socket.on(
      "receive_message",
      (data) => {
        setMessages((prev) => {
          return [...prev, data];
        });

        return () => socket.off("receive_message");
      },
      [socket]
    );

    return () => socket.off("receive_message");
  });
  return (
    <div className="flex h-screen font-sans">
      <div className="w-1/4 bg-gray-100 border-r">
        <ul className="divide-y">
          {friends.friendsList &&
            friends.friendsList.map((friend) => (
              <li
                key={friend.id}
                className={`p-4 cursor-pointer hover:bg-gray-200 ${
                  selectedFriend &&
                  selectedFriend.id === friend.id &&
                  "bg-gray-200"
                }`}
                onClick={() => handleSelectedFriend(friend)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                  <div className="ml-4">{friend.firstname}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-scroll p-4">
          {messages.map((newMess, index) => (
            <div
              key={index}
              className={`flex ${
                newMess.author === user.name ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div className="avatar">
                <div className="w-12">
                  <img
                    alt="PP"
                    src={
                      newMess.author === user.name ? user.icon : newMess.icon
                    }
                  />
                </div>
              </div>
              <div
                className={`rounded-lg px-4 py-2 ${
                  newMess.author === user.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {newMess.messages}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-4 border-t flex-wrap">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-full border-2 border-gray-200 mr-4 mb-4 sm:mb-0"
            // placeholder={`Message ${selectedFriend.name}...`}
            onChange={handleMessage}
            name="message"
            value={message}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4 sm:mb-0"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
