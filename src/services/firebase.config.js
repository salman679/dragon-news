// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1xa1Q1aD8UXmtBctNby7Dh4SfAxHO96c",
  authDomain: "dragon-news-c24d7.firebaseapp.com",
  projectId: "dragon-news-c24d7",
  storageBucket: "dragon-news-c24d7.firebasestorage.app",
  messagingSenderId: "139173931503",
  appId: "1:139173931503:web:58e5c09ff66b8444872e1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
