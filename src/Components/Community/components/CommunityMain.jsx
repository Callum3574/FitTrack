import React from "react";
import CurrentFriends from "./CurrentFriends.jsx";
import AddFriend from "./AddFriend";
function WalkingMain() {
  return (
    <div className="py-4 text-black bg-white  w-screen">
      <div className="tabs flex flex-row justify-center mx-auto">
        <a href="/messages" className="indicator tab tab-bordered">
          <span className="indicator-item badge">8</span>
          Messages
        </a>{" "}
        <a href=";" className="tab tab-bordered tab-active">
          Requests
        </a>
        <a href=";" className="indicator tab tab-bordered">
          <span className="indicator-item badge">8</span>
          Notifications
        </a>
      </div>
      <div>
        <h1 className="text-sm lg:ml-2 lg:text-start sm:text-center sm:mt-3 md:mt-3 mt-2 ml-2 text-center ">
          Welcome to your Community Dashboard, Callum
        </h1>
      </div>
      <div className="shadow-[#60e260] flex flex-col justify-evenly border text-center mx-auto mt-5 mb-5 max-w-[1024px]">
        <h1>You have 4 Friends Online!</h1>
        <CurrentFriends />
      </div>
      <div className="shadow-[#60e260] flex flex-col justify-evenly border text-center mx-auto mt-5 mb-5 max-w-[1024px]">
        <AddFriend />
      </div>
    </div>
  );
}

export default WalkingMain;
