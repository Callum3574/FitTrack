import React, { useState, useEffect } from "react";
import InputNewWalk from "./InputNewWalk.jsx";
import {
  userLevel,
  totalSteps,
  totalWalks,
  totalHoursWalked,
  caloriesBurnt,
  totalDistance,
} from "../../../../CalcFunctions/CalcFunctions";
import { fetchWeather } from "../../../Weather/Weather";

function ExerciseOverview({ data, user }) {
  const [highlights, setHighlights] = useState({
    currentRank: userLevel(data),
    totalSteps: totalSteps(data),
    totalWalks: totalWalks(data),
    hoursWalked: totalHoursWalked(data),
    caloriesBurnt: caloriesBurnt(data),
    totalDistance: totalDistance(data),
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const settingWeather = async () => {
      setWeather(await fetchWeather());
    };
    if (highlights) {
      settingWeather();
    }
  }, []);

  return (
    <div className="w-full py-4 text-black px-4 bg-white">
      <div className="tabs flex flex-row justify-center mx-auto">
        <InputNewWalk user={user} />
        <a href=";" className="tab tab-bordered tab-active">
          Recent Walks
        </a>
        <a href=";" className="indicator tab tab-bordered">
          <span className="indicator-item badge">8</span>
          Data
        </a>
      </div>
      <div>
        <h1 className="text-sm lg:ml-2 lg:text-start sm:text-center sm:mt-3 md:mt-3 mt-2 ml-2 text-center ">
          Welcome to your Walking Dashboard, Callum
        </h1>
      </div>

      <div className="stats shadow-[#60e260] flex flex-row justify-evenly mt-5 mb-5 ">
        <div className="stats stats-vertical sm:stats-horizontal md:stats-horizontal lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Current Weather</div>
            <div className="flex flex-row">
              <div className="stat-value">{!weather ? "⁉️" : weather.icon}</div>
              <div className="stat-value ml-2">
                {!weather ? "Loading.." : weather.celsius}°
              </div>
            </div>

            <div className="stat-desc">
              {!weather ? "Loading.." : weather.message}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Current Rank</div>
            <div className="stat-value">{highlights.currentRank}</div>
            <div className="stat-desc">Jan 1st - Dec 31st</div>
          </div>
          <div className="stat">
            <div className="stat-title">Total Steps</div>
            <div className="stat-value">{highlights.totalSteps}</div>
            <div className="stat-desc">Jan 1st - Dec 31st</div>
          </div>

          <div className="stat">
            <div className="stat-title">Distance Walked (km)</div>
            <div className="stat-value">{highlights.totalDistance}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Walks</div>
            <div className="stat-value">{highlights.totalWalks}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">Hours Walked</div>
            <div className="stat-value">{highlights.hoursWalked}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">Calories Burnt</div>
            <div className="stat-value">{highlights.caloriesBurnt}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseOverview;
