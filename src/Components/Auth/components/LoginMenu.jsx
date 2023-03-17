import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../../../Contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";

function LoginMenu() {
  const [currentCredentials, setCurrentCredentials] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginCredentials = (event) => {
    setCurrentCredentials((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(currentCredentials.email, currentCredentials.password);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="w-full py-16 text-white px-3 bg-white  ">
      <div className="mt-4 max-w-[1240px] mx-auto grid grid-cols-1 px-5 text-center lg:w-[400px] md:w-[400px]  sm:w-[400px] w-[350px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[500px] rounded-md shadow-xl hover:scale-105 duration-300">
        <CgProfile
          className="text-[#00df9a] mx-auto mt-[-2rem] mb-10"
          size={40}
        />
        <h1 className="text-black lg:text-4xl md:text-3xl text-2xl mx-auto mt-[-8rem] h-[4rem] lg:mt-[-6rem]">
          Sign in
        </h1>
        <form
          onSubmit={onSubmit}
          onChange={handleLoginCredentials}
          className="flex flex-col mx-auto w-full lg:mt-[-5rem] mt-[-10rem]"
        >
          <input
            className="w-full rounded-md p-3 flex text-black bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md"
            placeholder="Email Address *"
            type="email"
            name="email"
            required
          ></input>
          <input
            className=" w-ful rounded-md p-3 flex text-black mt-[1rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md"
            placeholder="Password *"
            type="password"
            name="password"
            required
          ></input>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-2 mt-[3rem] text-black">
            SIGN IN
          </button>
          <div className="flex justify-between">
            <label className="block text-gray-500 font-bold my-4">
              <input type="checkbox" className="leading-loose text-pink-600" />
              <span className="py-2 text-sm text-gray-600 leading-snug">
                {" "}
                Remember Me{" "}
              </span>
            </label>{" "}
            <label className="block text-gray-500 font-bold my-4">
              <a
                href="/"
                className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
              >
                <span>Forgot Password?</span>
              </a>
            </label>
          </div>
          <label className="block text-gray-500  my-4">
            <a
              href="/signup"
              className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
            >
              <span>Don't have an account? Sign-Up!</span>
            </a>
          </label>
        </form>
      </div>
    </div>
  );
}

export default LoginMenu;
