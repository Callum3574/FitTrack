import React, { useEffect, useState } from "react";
import Navbar from "../Partials/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Newsletter from "./components/Newsletter";
import NavBox from "./components/NavBox";
import Footer from "../Partials/Footer";
import checkUser from "../Auth/CheckUser.jsx";
import { useDispatch } from "react-redux";
import { useAuth } from "../../Contexts/AuthContext.js";

function Home({ user, setUser }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    const checkingUser = async () => {
      setUser(await checkUser(currentUser));
    };

    if (currentUser) {
      checkingUser();
    }
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <Hero user={user} />
      <Overview />
      <Newsletter />
      <NavBox />
      <Footer />
    </div>
  );
}

export default Home;
