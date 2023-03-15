import React from "react";
import InputNewWalk from "./InputNewWalk.jsx";

function ExerciseOverview({ user }) {
  return (
    <div className="w-full py-4 text-black px-4 bg-white">
      <div className="tabs flex flex-row justify-center mx-auto">
        <InputNewWalk user={user} />
        <a className="tab tab-bordered tab-active">Recent Walks</a>
        <a className="tab tab-bordered">Data</a>
      </div>
      <div>
        <h1 className="text-sm lg:ml-2 lg:text-start sm:text-center sm:mt-3 md:mt-3 mt-2 ml-2 text-center ">
          Welcome to your Walking Dashboard, Callum
        </h1>
      </div>

      <div className="stats shadow-[#60e260] flex flex-row justify-evenly mt-5 mb-5 ">
        <div className="stats stats-vertical sm:stats-horizontal md:stats-horizontal lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Current Rank</div>
            <div className="stat-value">31</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">Distance Walked</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Walks</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">Hours Walked</div>
            <div className="stat-value">48</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">Calories Burnt</div>
            <div className="stat-value">12,000</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseOverview;
