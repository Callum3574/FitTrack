import React, { useEffect, useState } from "react";
import Navbar from "../../../Partials/Navbar";
import FindMeExercise from "./FindMeExercise.jsx";
import { generateExercise } from "../../../../Networking/generateExercise";
function WeightsDash({ user }) {
  const [text, setText] = useState("");
  const [aiText, setAiText] = useState("");

  return (
    <div>
      <Navbar user={user} />
      <FindMeExercise setText={setText} setAiText={setAiText} text={text} />
      <p className="text-white text-6xl">{aiText}</p>
    </div>
  );
}

export default WeightsDash;
