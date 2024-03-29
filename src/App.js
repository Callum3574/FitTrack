import React, { useState } from "react";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Auth/Login.jsx";
import SignUp from "./Components/Auth/Signup.jsx";
import Profile from "./Components/Profile/Profile";
import Workouts from "./Components/Workouts/Workouts";
import WeightsDash from "./Components/Workouts/components/Weights/WeightsDash";
import RunningDash from "./Components/Workouts/components/Running/RunningDash";
import WalkingDash from "./Components/Workouts/components/Walking/WalkingDash";
import Community from "./Components/Community/Community";
import NotFound404 from "./Components/Partials/404";
import Messaging from "./Components/Messaging/Messaging";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import { ContactsProvider } from "./Contexts/ContactsProvider";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { gymDataApi } from "./store/slices/GymDataSlice";
import "aos/dist/aos.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <ApiProvider api={gymDataApi}>
        <AuthProvider>
          <ContactsProvider>
            <Routes>
              <Route
                path="/"
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
              <Route
                path="/community"
                element={<Community setUser={setUser} user={user} />}
              />
              <Route
                path="/messaging"
                element={<Messaging setUser={setUser} user={user} />}
              />

              <Route path="*" exact={true} element={<NotFound404 />} />
            </Routes>
          </ContactsProvider>
        </AuthProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
