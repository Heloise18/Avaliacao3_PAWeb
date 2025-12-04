// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqFACUWzQZAAw0s33oKDAUOYjo0Z3acFY",
  authDomain: "provapa-9bf39.firebaseapp.com",
  projectId: "provapa-9bf39",
  storageBucket: "provapa-9bf39.firebasestorage.app",
  messagingSenderId: "927646405014",
  appId: "1:927646405014:web:d1f73b0955f590a7324db7",
  measurementId: "G-NZC14VQ229"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);