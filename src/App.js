import React, { useState } from "react";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Auth/Login.jsx";
import SignUp from "./Components/Auth/Signup.jsx";
import Profile from "./Components/Profile/Profile";
import Workouts from "./Components/Workouts/Workouts";
import WeightsDash from "./Components/Workouts/components/Weights/WeightsDash";
import RunningDash from "./Components/Workouts/components/Running/RunningDash";
import WalkingDash from "./Components/Workouts/components/Walking/WalkingDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import { useSelector } from "react-redux";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route
            path="/home"
            element={<Home user={user} setUser={setUser} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile user={user} />}></Route>
          <Route
            path="/workouts"
            element={<Workouts user={user} setUser={setUser} />}
          />
          <Route
            path="/workouts/running"
            element={<RunningDash user={user} />}
          />
          <Route
            path="/workouts/walking"
            element={<WalkingDash user={user} />}
          />
          <Route
            path="/workouts/weights"
            element={<WeightsDash user={user} />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
