import React, { useEffect } from "react";
import Navbar from "../Partials/Navbar.jsx";
import Footer from "../Partials/Footer.jsx";
import Walking from "./components/Walking/Walking.jsx";
import Running from "./components/Running/Running.jsx";
import Weights from "./components/Weights/Weights.jsx";
import checkUser from "../Auth/CheckUser.jsx";
import { useDispatch } from "react-redux";
import { useAuth } from "../../Contexts/AuthContext.js";
import { useGetAllDataQuery } from "../../store/slices/GymDataSlice.js";
import { useSelector } from "react-redux";
function Workouts({ user, setUser }) {
  const { currentUser } = useAuth();
  const { data } = useGetAllDataQuery(currentUser ? currentUser.uid : null);

  const states = useSelector((state) => {
    return state;
  });
  console.log(states);
  useEffect(() => {
    const checkingUser = async () => {
      setUser(await checkUser(currentUser));
    };

    if (currentUser) {
      checkingUser();
    }
  }, []);

  return (
    <div className="">
      <div>
        <Navbar user={user} />
        <Walking user={user} data={data} />
        <Running user={user} data={data} />
        <Weights user={user} data={data} />
        <Footer />
      </div>
    </div>
  );
}

export default Workouts;
