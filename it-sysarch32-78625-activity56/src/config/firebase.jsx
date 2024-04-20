// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClI_QGEHP_SqpTZR5ilWv87dStXtfjT5U",
  authDomain: "activity56-ae786.firebaseapp.com",
  projectId: "activity56-ae786",
  storageBucket: "activity56-ae786.appspot.com",
  messagingSenderId: "814185573862",
  appId: "1:814185573862:web:eaa83a1da06d621a047a27",
  measurementId: "G-VXTNG00SWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);