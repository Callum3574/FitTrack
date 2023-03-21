import React, { useEffect, useState } from "react";
import Navbar from "../Partials/Navbar";
import CommunityMain from "./components/CommunityMain.jsx";
import Footer from "../Partials/Footer.jsx";
import Chat from "./components/Chat";
import { useAuth } from "../../Contexts/AuthContext.js";
import { useContact } from "../../Contexts/ContactsProvider";
import checkUser from "../Auth/CheckUser.jsx";

function Community({ user, setUser }) {
  const [friends, setFriends] = useState([]);
  const { currentUser } = useAuth();
  const { findAllFriends } = useContact();

  useEffect(() => {
    const importFriendsList = async (id) => {
      setFriends(await findAllFriends(id));
    };

    if (currentUser) {
      importFriendsList(currentUser.uid);
    }
  }, []);

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
      {currentUser && <CommunityMain />}
      {currentUser && <Chat friends={friends} user={user} />}
      <Footer />
    </div>
  );
}

export default Community;
