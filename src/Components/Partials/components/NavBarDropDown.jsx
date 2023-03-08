import React from "react";

const NavBarDropDown = () => {
  return (
    <div className="">
      <button className="rounded-full border-2 border-gray-600 focus:border-white focus:outline-none">
        {/* <img
          className="h-full w-full object-cover"
          alt="img"
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
        /> */}
      </button>
      <div className="bg-white rounded-md text-black py-2 w-48  ">
        <a className="block px-4 py-2 hover:bg-indigo-500" href="/">
          Logged in as....
        </a>
        <a className="block px-4 py-1 hover:bg-indigo-500" href="/">
          Profile
        </a>
        <a className="block px-4 py-2 hover:bg-indigo-500" href="/">
          Settings
        </a>
      </div>
    </div>
  );
};

export default NavBarDropDown;
