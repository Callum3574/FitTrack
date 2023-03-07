import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white w-full">
      <h1 className="text-3xl font-bold text-[#00df9a]">FitTrack.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">
          <Link to="/home">Home</Link>
        </li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Workouts</li>
        <li className="p-4 cursor-pointer">Community</li>
        <li className="p-4 cursor-pointer">
          <Link to="/login">Login/Sign-up</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {nav ? <AiOutlineClose /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <ul className="pt-12 uppercase">
          <li className="p-4  cursor-pointer border-b border-gray-600">Home</li>
          <li className="p-4  cursor-pointer border-b border-gray-600">
            About
          </li>
          <li className="p-4  cursor-pointer border-b border-gray-600">
            Workouts
          </li>
          <li className="p-4  cursor-pointer border-b border-gray-600">
            Community
          </li>
          <li className="p-4 cursor-pointer ">Login/Sign-up</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
