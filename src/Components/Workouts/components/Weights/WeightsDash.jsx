import React, { useEffect, useState } from "react";
import Navbar from "../../../Partials/Navbar";
import FindMeExercise from "./FindMeExercise.jsx";
import { generateExercise } from "../../../../Networking/generateExercise";
function WeightsDash({ user }) {
  const [aiRes, setAiRes] = useState("");

  useEffect(() => {}, [aiRes]);
  return (
    <div>
      <Navbar user={user} />
      <FindMeExercise aiRes={aiRes} setAiRes={setAiRes} />
    </div>
  );
}

export default WeightsDash;
