import React, { useState, useEffect } from "react";
import { generateExercise } from "../../../../Networking/generateExercise";
function FindMeExercise({ setText, text, setAiText }) {
  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    setAiText(await generateExercise(text));
  };
  return (
    <div className="w-screen py-16 bg-[#f2f2f2]">
      <div className="flex justify-center space-x-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={handleTextChange}
        />
        <button onClick={handleSubmit} className="btn">
          ENTER
        </button>
      </div>

      <div></div>
    </div>
  );
}

export default FindMeExercise;
