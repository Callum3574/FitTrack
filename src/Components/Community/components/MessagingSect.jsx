import React from "react";
import Chat from "./Chat.jsx";

function MessagingSect({ currentUser, friends, user }) {
  return (
    <div className="w-full py-16 text-white px-4 bg-black">
      <div className="flex ">
        <div className="flex-auto w-64 ...">
          <Chat friends={friends} user={user} currentUser={currentUser} />
        </div>
        <div className="flex-auto w-32 ...">03</div>
      </div>
    </div>
  );
}

export default MessagingSect;
