import React from "react";

function FriendsList({ user }) {
  return (
    <div className="flex flex-row justify-center border-b space-x-4">
      <div className="bg-[#f2f2f2]">
        <div className="avatar">
          <div className="w-16 rounded-full border">
            <img alt="pic" src={user.icon} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1>{user.name}</h1>
      </div>
    </div>
  );
}

export default FriendsList;
