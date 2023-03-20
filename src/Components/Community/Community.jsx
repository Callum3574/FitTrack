import React, { useEffect, useState } from "react";
import Navbar from "../Partials/Navbar";
import CommunityMain from "./components/CommunityMain.jsx";
import Footer from "../Partials/Footer.jsx";
import Chat from "../Messaging/components/Chat";
import { useAuth } from "../../Contexts/AuthContext.js";
import checkUser from "../Auth/CheckUser.jsx";

function Community({ user, setUser }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    const checkingUser = async () => {
      setUser(await checkUser(currentUser));
    };

    if (currentUser) {
      checkingUser();
    }
  }, []);
  return (
    <div>
      <Navbar user={user} />
      <CommunityMain />
      <Chat user={user} />
      <Footer />
    </div>
  );
}

export default Community;
