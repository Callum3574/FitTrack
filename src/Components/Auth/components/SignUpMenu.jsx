import React from "react";
import { CgProfile } from "react-icons/cg";
function SignUpMenu() {
  return (
    <div className="w-full py-16 text-white px-3 bg-white  ">
      <div className="mt-4 max-w-[1240px] mx-auto grid grid-cols-1 px-5 text-center lg:w-[600px] md:w-[400px]  sm:w-[400px] w-[350px] lg:h-[600px] md:h-[600px] sm:h-[560px] h-[650px] rounded-md shadow-xl hover:scale-105 duration-300">
        <CgProfile
          className="text-[#00df9a] mx-auto mt-[-2rem] mb-10"
          size={40}
        />
        <h1 className="text-black lg:text-4xl md:text-3xl text-2xl mx-auto mt-[-8rem] h-[4rem] lg:mt-[-6rem]">
          Sign in
        </h1>
        <form className="flex flex-col mx-auto w-full lg:mt-[-5rem] mt-[-10rem]">
          <div className="flex lg:mb-[1rem] md:mb-[1rem] sm:mb-[1rem] mb-[1rem] ">
            <input
              className="w-full rounded-md p-3 flex text-black bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md"
              placeholder="First Name *"
              type="email"
            ></input>
            <input
              className=" w-full rounded-md p-3 flex text-black bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md lg:ml-[1rem]"
              placeholder="Last Name *"
              type="name"
            ></input>
          </div>

          <input
            className="w-full rounded-md p-3 flex text-black bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md"
            placeholder="Email Address *"
            type="email"
          ></input>
          <input
            className=" w-ful rounded-md p-3 flex text-black mt-[1rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md"
            placeholder="Password *"
            type="password"
          ></input>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-2 mt-[3rem] text-black">
            SIGN UP
          </button>
          <div className="flex justify-between mx-auto">
            <label className="block text-gray-500 font-bold my-4">
              <input type="checkbox" className=" leading-loose text-pink-600" />
              <span className="py-2 text-sm text-gray-600 leading-snug">
                {" "}
                Remember Me{" "}
              </span>
            </label>{" "}
          </div>
          <label className="block text-gray-500 my-4">
            <a
              href="/"
              className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
            >
              <span>Already have an account? Sign in!</span>
            </a>
          </label>
        </form>
      </div>
    </div>
  );
}

export default SignUpMenu;
