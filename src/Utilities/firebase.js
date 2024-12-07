// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP7B61M9suupPowzCmDOyvCqCCSLqLYtE",
  authDomain: "netflix-gpt-6b848.firebaseapp.com",
  projectId: "netflix-gpt-6b848",
  storageBucket: "netflix-gpt-6b848.firebasestorage.app",
  messagingSenderId: "395192686437",
  appId: "1:395192686437:web:43bddd8c6d6dd1ef13f38c",
  measurementId: "G-T7HR185L6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
