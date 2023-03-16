import React from "react";

function WalkCard({ walk }) {
  return (
    // <div className="border-b flex flex-col p-4 lg:flex-row lg:justify-evenly md:flex-row md:justify-evenly sm:flex-row sm:justify-evenly">
    //   <div className="mx-auto lg:mx-6 lg:mt-10 lg:text-xl lg:w-60 md:mx-6 md:mt-10 md:text-xl md:w-60 sm:w-60 sm:mx-4 sm:mt-8 sm:text-lg">
    //     <h1 className="">You're recent walk at: {walk.location}</h1>
    // <p>Date: {walk.date.slice(0, 10)}</p>
    // <p>Distance: {walk.distance}km</p>
    // <p>Steps: {walk.steps}</p>
    // <p>Duration: {walk.duration} minutes</p>
    //   </div>
    //   <div className="mt-4 lg:w-80 md:w-80 sm:w-60 ">
    //     <img
    //       className="rounded-lg"
    //       src="https://discovernewmarket.co.uk/wp-content/uploads/2018/06/shutterstock_72331369.jpg"
    //       alt="walk-img"
    //     ></img>
    //   </div>
    //   <div>
    //     <div className="rating">
    //       <input
    //         type="radio"
    //         name="rating-2"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //       <input
    //         type="radio"
    //         name="rating-2"
    //         className="mask mask-star-2 bg-orange-400"
    //         checked
    //       />
    //       <input
    //         type="radio"
    //         name="rating-2"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //       <input
    //         type="radio"
    //         name="rating-2"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //       <input
    //         type="radio"
    //         name="rating-2"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="mx-auto card w-60 md:mt-4 sm:mt-8 mt-8 bg-[#f9f9fa] shadow-xl text-black hover:bg-gray-400 hover:ease-in-out duration-150">
        <figure className="px-10 pt-10">
          <img
            src="https://discovernewmarket.co.uk/wp-content/uploads/2018/06/shutterstock_72331369.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{walk.location}</h2>

          <p>Date: {walk.date.slice(0, 10)}</p>
          <p>Distance: {walk.distance}km</p>
          <p>Steps: {walk.steps}</p>
          <p>Duration: {walk.duration} minutes</p>
          <p>Calories Burnt: {walk.calories}</p>

          <div className="rating card-actions">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#00DF9A]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#00DF9A]"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#00DF9A]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#00DF9A]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#00DF9A]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalkCard;
