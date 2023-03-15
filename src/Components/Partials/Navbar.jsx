import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBarDropDown from "./components/NavBarDropDown.jsx";

function Navbar({ user }) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  console.log(user);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white w-full ">
      <h1 className="text-3xl font-bold text-[#00df9a]">FitTrack.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">
          <Link to="/home">Home</Link>
        </li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">
          <Link to="/workouts">Workouts</Link>
        </li>
        <li className="p-4 cursor-pointer">Community</li>
        {!user ? (
          <div>
            <li className="p-4 cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
          </div>
        ) : (
          <div>
            <li className="p-4 cursor-pointer rounded-full border-2 border-gray-600 focus:border-white focus:outline-none w-[4rem] overflow-hidden">
              <img
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="h-full w-full object-cover rounded-full"
                type="button"
                alt="button"
                src={user.icon}
              />
            </li>
            <div
              id="dropdownHover"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
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
          <li className="p-4  cursor-pointer border-b border-gray-600">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-4  cursor-pointer border-b border-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4  cursor-pointer border-b border-gray-600">
            <Link to="/workouts">Workouts</Link>
          </li>
          <li className="p-4  cursor-pointer border-b border-gray-600">
            <Link to="/community">Community</Link>
          </li>
          <li className="p-4 cursor-pointer ">Login/Sign-up</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
