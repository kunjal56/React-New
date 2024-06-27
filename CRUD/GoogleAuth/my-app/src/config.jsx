// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdgxM7zbRjEkB7l43JuPLfsvO9ag7SYlE",
  authDomain: "auth-f7c36.firebaseapp.com",
  projectId: "auth-f7c36",
  storageBucket: "auth-f7c36.appspot.com",
  messagingSenderId: "657222930929",
  appId: "1:657222930929:web:3373bf6d093d271c037450",
  measurementId: "G-B0QZ9LTC2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);