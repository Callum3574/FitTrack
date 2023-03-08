import React from "react";
import Typed from "react-typed";

function Hero({ user }) {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {user ? (
          <p className="text-[#00df9a] font-bold p-2">
            Let's stay fit together, {user.name}
          </p>
        ) : (
          <p className="text-[#00df9a] font-bold p-2">
            Let's stay fit together!{" "}
          </p>
        )}
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md: py-1">
          Grow with FitTrack
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-6xl sm:text-4xl text-xl font-bold py-4">
            Keep track of
          </p>
          <Typed
            className="md:text-6xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Walks", "Workouts", "Runs"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-xl text-lg font-bold pl-3 mt-2 text-gray-500">
          Join our community today and connect with like-minded individuals who
          share your interest in fitness and wellness.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
          JOIN NOW
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
