import React from "react";
import { Link } from "react-router-dom";
const NotFound404 = () => {
  return (
    <div className="grid h-screen place-items-center ">
      <div className="text-center text-6xl text-[#00df9a]">
        <h1>404</h1>
        <h1>PAGE NOT FOUND</h1>
        <Link
          className="bg-[#00df9a] text-2xl  p-10 rounded-md font-medium my-6 py-2 mt-[3rem] text-black"
          to="/home"
        >
          <button className="bg-[#00df9a] text-2xl  rounded-md font-medium my-6 py-2 mt-[3rem] text-black"></button>
          BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
