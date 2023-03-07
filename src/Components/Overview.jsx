import React from "react";
import SprintingDoodle from "../Assets/SprintingDoodle.svg";

function Overview() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[350px] mx-auto my-4"
          alt="img"
          src={SprintingDoodle}
        ></img>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold uppercase">
            FitTrack Community{" "}
          </p>
          <h1 className="md:text-4xl sm:text-3xl 2xl font-bold py-2 ">
            Share, Compete, Compare
          </h1>

          <h1>
            By sharing progress, communicating with others, and competing in
            challenges, our app provides a fun and effective way to stay
            motivated and achieve your fitness goals
          </h1>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 text-black uppercase">
            Join FitTrack
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overview;
