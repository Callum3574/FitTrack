import React, { useEffect } from "react";
import Navbar from "../Partials/Navbar.jsx";
import Footer from "../Partials/Footer.jsx";
import Walking from "./components/Walking/Walking.jsx";
import Running from "./components/Running/Running.jsx";
import Weights from "./components/Weights/Weights.jsx";
import checkUser from "../Auth/CheckUser.jsx";
import { useDispatch } from "react-redux";
import { checkingUser } from "../../store/store";
import { useAuth } from "../../Contexts/AuthContext.js";

function Workouts({ user }) {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

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
    <div className="">
      <div>
        <Navbar user={user} />
        <Walking />
        <Running />
        <Weights />
        <Footer />
      </div>
    </div>
  );
}

export default Workouts;
