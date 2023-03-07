import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero";
import Overview from "./Components/Overview";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import NavBox from "./Components/NavBox";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview />
      <Newsletter />
      <NavBox />
      <Footer />
    </div>
  );
}

export default App;
