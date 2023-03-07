import React from "react";
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";
import SignUpMenu from "./components/SignUpMenu";

function SignUp() {
  return (
    <div>
      <Navbar />
      <SignUpMenu />
      <Footer />
    </div>
  );
}

export default SignUp;
