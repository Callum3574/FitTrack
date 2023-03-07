import React from "react";

function NavBox() {
  return (
    <div className="w-full py-16 text-black bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-5 ">
        <div className="h-[15rem] flex flex-col justify-center  rounded-md shadow-xl hover:scale-105 duration-300">
          <h1 className="text-[#000000] text-bold md:text-3xl sm:text-2xl text-xl py-8 px-4 text-center">
            Popular Walks
          </h1>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
            JOIN NOW
          </button>
        </div>
        <div className="h-[15rem] flex flex-col justify-center  rounded-md shadow-xl hover:scale-105 duration-300 bg-gray-200">
          <h1 className="text-[#000000] text-bold md:text-3xl sm:text-2xl text-l py-8 px-4 text-center">
            Popular Walks
          </h1>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
            JOIN NOW
          </button>
        </div>
        <div className="h-[15rem] flex flex-col justify-center  rounded-md shadow-xl hover:scale-105 duration-300">
          <h1 className="text-[#000000] text-bold md:text-3xl sm:text-2xl text-xl py-8 px-4 text-center">
            Highscores
          </h1>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBox;
