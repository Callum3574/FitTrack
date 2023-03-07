import React from "react";
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";
import LoginMenu from "./components/LoginMenu";

function Login() {
  return (
    <div>
      <Navbar />
      <LoginMenu />
      <Footer />
    </div>
  );
}

export default Login;
