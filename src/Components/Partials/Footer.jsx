import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import GroovyDoodle from "../../Assets/GroovyDoodle.svg";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-4 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 my-5 pl-6 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">FitTrack.</h1>
        <p className="py-4 ">
          Looking for a reliable and effective way to track your fitness
          progress? Look no further than FitTrack, the ultimate fitness website
          designed to help you achieve your health and wellness goals.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <AiFillGithub size={40} />
          <AiFillLinkedin size={40} />
          <AiFillTwitterCircle size={40} />
        </div>
      </div>
      <div className="lg:col-span-1 flex justify-between py-4 px-8">
        <div className="">
          <ul>
            <li className="text-lg py-2">Quick Links</li>

            <li className="text-sm py-2">Home</li>
            <li className="text-sm py-2">About</li>
            <li className="text-sm py-2">Workouts</li>
            <li className="text-sm py-2">Community</li>
            <li className="text-sm py-2">Login/Sign-up</li>
          </ul>
        </div>
      </div>
      <div className="sm:w-[25%] sm:col-span-3 lg:col-span-1 lg:w-[100%] py-2 md:w-[50%]">
        <img src={GroovyDoodle} alt="pic" />
      </div>
    </div>
  );
}

export default Footer;
