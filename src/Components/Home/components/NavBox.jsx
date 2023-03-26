import React from "react";
import { GiAchievement, GiWalk } from "react-icons/gi";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function NavBox() {
  return (
    <div className="w-full py-16 text-black bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-5 ">
        <div
          className="h-[20rem] flex flex-col justify-center  rounded-md shadow-xl hover:scale-105 duration-300"
          data-aos="fade-up"
        >
          <MdOutlineDashboardCustomize
            className="mx-auto mt-[-5rem] "
            size={60}
          />
          <h1 className="text-[#000000] text-bold md:text-3xl sm:text-2xl text-xl py-8 px-4 text-center">
            Dashboard
          </h1>
          <p className="lg:text-sm md:text-sm sm:text-lg mx-auto px-4 text-center mb-2 font-bold">
            By accessing the dashboard, you can view your progress, track your
            workouts, and monitor your achievements.{" "}
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
            DASHBOARD
          </button>
        </div>
        <div
          className="h-[20rem] flex flex-col justify-center  rounded-md shadow-xl hover:scale-105 duration-300 bg-gray-200 mt-6"
          data-aos="fade-up"
        >
          <GiWalk className="mx-auto mt-[-5rem] " size={60} />

          <h1 className="text-[#000000] text-bold md:text-3xl sm:text-2xl text-l py-8 px-4 text-center">
            Popular Walks
          </h1>

          <p className="lg:text-sm md:text-sm sm:text-lg mx-auto px-4 text-center mb-2 font-bold text-[#000000]">
            Here, you'll find a collection of some of the most scenic and
            exciting walking routes in your area.
          </p>
          <button className="bg-[#010101] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-white">
            WALKS
          </button>
        </div>
        <div
          className="h-[20rem] flex flex-col justify-center  rounded-md shadow-xl hover:scale-105 duration-300"
          data-aos="fade-up"
        >
          <GiAchievement className="mx-auto mt-[-3rem]" size={60} />

          <h1 className="text-[#000000] text-bold md:text-3xl sm:text-2xl text-xl py-8 px-4 text-center">
            Highscores
          </h1>
          <p className="lg:text-sm md:text-sm sm:text-lg mx-auto px-4 text-center mb-2 font-bold">
            Looking to compete against other users and see how you stack up in
            your fitness journey? Check out our Highscores section!
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
            HIGHSCORES
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBox;
