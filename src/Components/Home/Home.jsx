import React, { useEffect } from "react";
import Navbar from "../Partials/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Newsletter from "./components/Newsletter";
import NavBox from "./components/NavBox";
import Footer from "../Partials/Footer";
import checkUser from "../Auth/CheckUser.jsx";
import { useDispatch } from "react-redux";
import { checkingUser } from "../../store/store";
import { useSelector } from "react-redux";
import { useAuth } from "../../Contexts/AuthContext.js";

function Home({ user }) {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  // const user = useSelector((state) => {
  //   return state.auth.username;
  // });

  useEffect(() => {
    const checkingCurrentUser = async () => {
      await checkUser(currentUser);
      await dispatch(checkingUser(currentUser));
    };

    if (currentUser) {
      checkingCurrentUser();
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
