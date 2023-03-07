// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnxAk-HOQaaZ_UEJ7DdPCFdHZr_dRUduw",
  authDomain: "gym-auth-development.firebaseapp.com",
  projectId: "gym-auth-development",
  storageBucket: "gym-auth-development.appspot.com",
  messagingSenderId: "756242823212",
  appId: "1:756242823212:web:d3ee98dd36855a30e27989",
  measurementId: "G-2L4D729YVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
