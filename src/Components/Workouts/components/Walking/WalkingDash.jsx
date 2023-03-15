import React from "react";
import Navbar from "../../../Partials/Navbar";
import { useLocation } from "react-router-dom";
import ExerciseOverview from "./ExerciseOverview.jsx";
import RecentWalks from "./RecentWalks.jsx";
function WalkingDash() {
  const location = useLocation();
  const data = location.state && location.state.data;
  const user = location.state.user;
  console.log(data);

  return (
    <div>
      <Navbar user={user} />
      <ExerciseOverview user={user} walking="Walking" />
      <RecentWalks user={user} data={data} />
    </div>
  );
}

export default WalkingDash;
