import React from "react";
import WalkCard from "./WalkCard.jsx";

function RecentWalks({ data }) {
  return (
    <div className="w-full py-16 text-white px-4 bg-black">
      <div>
        <h1 className="text-center lg:text-xl underline text-2xl lg:text-start lg:ml-3">
          Recent walks
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:ml-10 md:grid md:grid-cols-3 md:p-10 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8 mx-auto overflow-auto ">
        {data.slice(0, 5).map((walk) => {
          return <WalkCard walk={walk} />;
        })}
      </div>
    </div>
  );
}

export default RecentWalks;
