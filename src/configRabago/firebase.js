// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyClI_QGEHP_SqpTZR5ilWv87dStXtfjT5U",
  authDomain: "activity56-ae786.firebaseapp.com",
  projectId: "activity56-ae786",
  storageBucket: "activity56-ae786.appspot.com",
  messagingSenderId: "814185573862",
  appId: "1:814185573862:web:eaa83a1da06d621a047a27",
  measurementId: "G-VXTNG00SWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)