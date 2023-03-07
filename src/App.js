import React from "react";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Auth/Login.jsx";
import SignUp from "./Components/Auth/Signup.jsx";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => {
    console.log(state.auth.username);
    return state.auth.username;
  });

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
