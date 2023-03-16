import React from "react";
import { Link } from "react-router-dom";

function Weights({user}) {
  return (
    <div className="w-full py-16 text-black bg-white">
      <div className="">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 px-5">
          <div
            className="h-[20rem] 
          flex flex-col justify-start  rounded-md shadow-xl hover:scale-105 duration-300"
          >
            <h1 className="text-[#000000] text-bold md:text-3xl sm:text-2xl text-xl py-8 px-4 text-center">
              Weights
            </h1>
            <p className="lg:text-sm md:text-sm sm:text-lg mx-auto px-4 text-center mb-2 font-bold">
              By accessing the dashboard, you can view your progress, track your
              workouts, and monitor your achievements.{" "}
            </p>
            {user ? (
              <button
                // onClick={openWalkingDash}
                className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black"
              >
                DASHBOARD
              </button>
            ) : (
              <button
                className="bg-[#555555] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-white"
                disabled
              >
                SIGN UP FOR ACCESS
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weights;
