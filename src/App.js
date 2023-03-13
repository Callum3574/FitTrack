import React from "react";
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
  const user = useSelector((state) => {
    console.log(state.auth.user);
    return state.auth.user;
  });

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home user={user} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/workouts" element={<Workouts user={user} />} />
          <Route path="/workouts/running" element={<RunningDash />} />
          <Route path="/workouts/walking" element={<WalkingDash />} />
          <Route path="/workouts/weights" element={<WeightsDash />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
