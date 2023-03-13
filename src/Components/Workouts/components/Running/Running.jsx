import React from "react";
import { Link } from "react-router-dom";
function Running() {
  return (
    <div className="w-full py-16 text-white bg-black">
      <div className="">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 px-5  ">
          <div></div>
          <div className="h-[20rem] flex flex-col justify-end rounded-md shadow-xl hover:scale-105 duration-300 text-white">
            <h1 className=" text-bold md:text-3xl sm:text-2xl text-xl py-8 px-4 text-center text-white">
              Running
            </h1>
            <p className="lg:text-sm md:text-sm sm:text-lg mx-auto px-4 text-center mb-2 font-bold text-white">
              By accessing the dashboard, you can view your progress, track your
              workouts, and monitor your achievements.{" "}
            </p>
            <Link className="mx-auto" to="/workouts/running">
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4  py-3 text-black">
                DASHBOARD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Running;
