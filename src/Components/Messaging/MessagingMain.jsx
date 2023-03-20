import React from "react";
import Navbar from "../../Components/Partials/Navbar";
import Footer from "../Partials/Footer.jsx";
import Chat from "./components/Chat.jsx";
function MessagingMain({ user }) {
  return (
    <div>
      <Navbar user={user} />
      <Chat user={user} />
      <Footer />
    </div>
  );
}

export default MessagingMain;
