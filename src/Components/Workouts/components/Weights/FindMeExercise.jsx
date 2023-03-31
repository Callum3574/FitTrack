import React, { useState, useEffect } from "react";
import { generateExercise } from "../../../../Networking/generateExercise";
function FindMeExercise({ aiRes, setAiRes }) {
  const [textInput, setTextInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleText = (event) => {
    event.preventDefault();
    setTextInput(event.target.value);
  };

  const handleEnter = () => {
    setSubmitted(!submitted);
  };

  useEffect(() => {
    const settingRes = async () => {
      setAiRes(await generateExercise(textInput));
    };

    if (aiRes) {
      settingRes();
    }
  }, [aiRes]);

  return (
    <div className="w-screen py-16 bg-[#f2f2f2]">
      <div className="flex justify-center space-x-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={handleText}
        />
        <button onClick={handleEnter} className="btn">
          ENTER
        </button>
      </div>

      <div>
        <p>{aiRes.content}</p>
      </div>
    </div>
  );
}

export default FindMeExercise;
