// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSLU1S26CMumrNoWFChDQLsxHsAhWV7qM",
  authDomain: "netflix-gpt-314ec.firebaseapp.com",
  projectId: "netflix-gpt-314ec",
  storageBucket: "netflix-gpt-314ec.firebasestorage.app",
  messagingSenderId: "792997702866",
  appId: "1:792997702866:web:3360e62f3aa9fd9332910b",
  measurementId: "G-6LPBYJ18V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();