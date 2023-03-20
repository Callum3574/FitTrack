import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const friends = [
  { id: 1, name: "Milly" },
  { id: 2, name: "Josh" },
  { id: 3, name: "Cal" },
  { id: 4, name: "Ben" },
];

const Chat = ({ user }) => {
  const [message, setMessage] = useState("");
  const [room_id, setRoom_id] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(friends[0]);

  const sendMessage = async () => {
    if (message.message !== "") {
      const messageData = {
        room: room_id,
        icon: user.icon,
        author: user.name,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData, room_id);
      setMessage("");
    }
  };

  const joinRoom = () => {
    if (room_id !== "") {
      socket.emit("join_room", room_id);
    }
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleRoom = (e) => {
    e.preventDefault();

    setRoom_id(e.target.value);
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => {
        return [...prev, data];
      });
    });

    console.log(messages);
  }, [socket]);

  return (
    <div className="flex h-screen font-sans">
      <div className="w-1/4 bg-gray-100 border-r">
        <ul className="divide-y">
          {friends.map((friend) => (
            <li
              // key={friend.id}
              className={`p-4 cursor-pointer hover:bg-gray-200 ${
                selectedFriend.id === friend.id && "bg-gray-200"
              }`}
              onClick={() => setSelectedFriend(friend)}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                <div className="ml-4">{friend.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-scroll p-4">
          {messages.map((newMess) => (
            <div
              // key={message.id}
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
                {newMess.author === user.name ? message : newMess.message}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-4 border-t">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-full border-2 border-gray-200 mr-4"
            // placeholder={`Message ${selectedFriend.name}...`}
            onChange={handleMessage}
            name="message"
            value={message}
          />
          <input
            type="text"
            placeholder="room-id"
            onChange={handleRoom}
            name="room_id"
            value={room_id}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={sendMessage}
          >
            Send
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={joinRoom}
          >
            JOIN ROOM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
