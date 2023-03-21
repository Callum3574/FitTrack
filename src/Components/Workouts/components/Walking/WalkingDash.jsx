import React, { useEffect } from "react";
import Navbar from "../../../Partials/Navbar";
import { useLocation } from "react-router-dom";
import ExerciseOverview from "./ExerciseOverview.jsx";
import RecentWalks from "./RecentWalks.jsx";
import { fetchWeather } from "../../../Weather/Weather.js";
import { HighlightsProvider } from "../../../../Contexts/HighlightsContext.js";

function WalkingDash() {
  const location = useLocation();
  const data = location.state && location.state.data;
  const user = location.state.user;

  return (
    <div>
      <Navbar user={user} />
      <HighlightsProvider>
        <ExerciseOverview data={data} user={user} />
      </HighlightsProvider>
      <RecentWalks user={user} data={data} />
    </div>
  );
}

export default WalkingDash;
