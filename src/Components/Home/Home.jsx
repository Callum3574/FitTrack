import React from "react";
import Navbar from "../Partials/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Newsletter from "./components/Newsletter";
import NavBox from "./components/NavBox";
import Footer from "../Partials/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Newsletter />
      <NavBox />
      <Footer />
    </div>
  );
}

export default Home;
