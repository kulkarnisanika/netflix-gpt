// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtr-YLF2WSFRf92iNc8czpF3YsFz1Hf9U",
  authDomain: "cine-gpt-app.firebaseapp.com",
  projectId: "cine-gpt-app",
  storageBucket: "cine-gpt-app.firebasestorage.app",
  messagingSenderId: "705401655903",
  appId: "1:705401655903:web:024bf4a6462fa95e9241ea",
  measurementId: "G-MVEVK74VJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()