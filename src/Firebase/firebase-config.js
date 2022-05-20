// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtq57GaC6uohFESSGJ0wUTFI5UEshfOu0",
  authDomain: "react-firebase-auth-6eef4.firebaseapp.com",
  projectId: "react-firebase-auth-6eef4",
  storageBucket: "react-firebase-auth-6eef4.appspot.com",
  messagingSenderId: "480035149782",
  appId: "1:480035149782:web:5136e461395f33bbdb7677",
  measurementId: "G-NDP0PV1H6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
