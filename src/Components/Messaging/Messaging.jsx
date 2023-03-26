import React, { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext.js";
import checkUser from "../Auth/CheckUser";
import ChatInbox from "./components/ChatInbox";
import Navbar from "../Partials/Navbar.jsx";
import FriendsList from "./components/FriendsList";
function Messaging({ user, setUser }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    const checkingUser = async () => {
      setUser(await checkUser(currentUser));
    };

    if (currentUser) {
      checkingUser();
    }
  }, []);

  console.log(user);
  return (
    <div>
      <Navbar user={user} />
      <div className="flex flex-row">
        <div className="h-screen p-5 pt-8 sm:w-72 bg-[#f2f2f2] rounded-lg w-[100%]">
          <FriendsList user={user} />
        </div>
      </div>
    </div>
  );
}

export default Messaging;
