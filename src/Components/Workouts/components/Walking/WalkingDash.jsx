import React, { useEffect } from "react";
import Navbar from "../../../Partials/Navbar";
import { useLocation } from "react-router-dom";
import ExerciseOverview from "./ExerciseOverview.jsx";
import RecentWalks from "./RecentWalks.jsx";
import { fetchWeather } from "../../../Weather/Weather.js";
function WalkingDash() {
  const location = useLocation();
  const data = location.state && location.state.data;
  const user = location.state.user;

  useEffect(() => {
    const allWeatherAPI = async () => {
      const weather = await fetchWeather();
      console.log(weather);
    };
    allWeatherAPI();
  }, []);
  return (
    <div>
      <Navbar user={user} />
      <ExerciseOverview data={data} user={user} />
      <RecentWalks user={user} data={data} />
    </div>
  );
}

export default WalkingDash;
