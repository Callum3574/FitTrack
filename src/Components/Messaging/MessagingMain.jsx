import React from "react";
import Navbar from "../../Components/Partials/Navbar";
import Footer from "../Partials/Footer.jsx";
function MessagingMain({ user }) {
  return (
    <div>
      <Navbar user={user} />
      <Footer />
    </div>
  );
}

export default MessagingMain;
