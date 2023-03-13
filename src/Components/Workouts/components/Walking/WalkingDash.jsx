import React from "react";
import Navbar from "../../../Partials/Navbar";
import { useLocation } from "react-router-dom";

function WalkingDash() {
  const location = useLocation();
  const data = location.state && location.state.data;
  const user = location.state.user;
  console.log(user);

  return (
    <div>
      <Navbar user={user} />
      <h1>Walking</h1>
    </div>
  );
}

export default WalkingDash;
