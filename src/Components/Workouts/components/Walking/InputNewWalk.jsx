import React, { useState, useEffect } from "react";
import { inputNewWalk } from "../../../../Networking/InputNewWalkPOST.jsx";
function InputNewWalk({ user }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [currentInput, setCurrentInput] = useState({
    exercise_id: 1,
    duration: "",
    calories: "",
    steps: "",
    date: "",
    distance: "",
    location: "",
    rating: "",
    user_id: user.id ? user.id : null,
  });

  const resetInputState = () => {
    setCurrentInput({
      exercise_id: 1,
      duration: "",
      calories: "",
      steps: "",
      date: "",
      distance: "",
      location: "",
      rating: "",
      user_id: user.id ? user.id : null,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async () => {
    resetInputState();
    const res = await inputNewWalk(currentInput);
    if (res.status === 200) {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } else {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };
  return (
    <div>
      <label htmlFor="my-modal-5" className="tab tab-bordered">
        Input Walk
      </label>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box lg:w-2/4 lg:max-w-5xl ">
          <h3 className="text-center font-bold text-lg">Input New Walk!</h3>
          <div className="py-4">
            <div className="mx-auto form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Where did you walk?</span>
                <span className="label-text-alt">Location*</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
                name="location"
              />
              <label className="label">
                <span className="label-text">When did you complete walk?</span>
                <span className="label-text-alt">Date*</span>
              </label>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
                name="date"
              />
              <label className="label">
                <span className="label-text">How long for (mins)?</span>
                <span className="label-text-alt">Duration*</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
                name="duration"
              />
              <label className="label">
                <span className="label-text">How many calories burnt?</span>
                <span className="label-text-alt">Calories*</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
                name="calories"
              />
              <label className="label">
                <span className="label-text">How many steps?</span>
                <span className="label-text-alt">Steps*</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
                name="steps"
              />
              <label className="label">
                <span className="label-text">How far did you walk?</span>
                <span className="label-text-alt">Distance(km)*</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
                name="distance"
              />
              <label className="mx-auto label">
                <span className="label-text">
                  How would you rate your walk?*
                </span>
              </label>
              <div className="mx-auto rating card-actions mt-3s">
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-[#00DF9A]"
                  onChange={handleChange}
                  value="1"
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-[#00DF9A]"
                  value="2"
                  onChange={handleChange}
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-[#00DF9A]"
                  value="3"
                  onChange={handleChange}
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-[#00DF9A]"
                  value="4"
                  onChange={handleChange}
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-[#00DF9A]"
                  value="5"
                  onChange={handleChange}
                />
              </div>
              {loading && (
                <progress className="mt-5 mx-auto progress w-56"></progress>
              )}
              {error && (
                <div className="mt-5 lg:mt-5 md:mt-5 sm:mt-5 alert alert-error shadow-lg">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Error! Submission failed.</span>
                  </div>
                </div>
              )}
              {success && (
                <div className="mt-5 lg:mt-5 md:mt-5 sm:mt-5 alert alert-success shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Your submission was successful!</span>
                  </div>
                </div>
              )}
              <div className="modal-action ">
                <label
                  htmlFor="my-modal-5"
                  className="bg-[#00df9a]  rounded-md 
              w-[200px] font-medium my-4 text-center md:mx-0 py-3 text-black uppercase cursor-pointer"
                >
                  EXIT
                </label>

                <button
                  onClick={onSubmit}
                  htmlFor="my-modal-5"
                  className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 md:mx-0 py-3 text-black uppercase text-center
                cursor-pointer
                "
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputNewWalk;
