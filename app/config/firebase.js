// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2WZmX2Q9BOSFpKWjfXuup_wtRfsunlcE",
  authDomain: "fir-demo2026-ae4c4.firebaseapp.com",
  projectId: "fir-demo2026-ae4c4",
  storageBucket: "fir-demo2026-ae4c4.firebasestorage.app",
  messagingSenderId: "379844637665",
  appId: "1:379844637665:web:27ab967e0322ff797798a0",
  measurementId: "G-THPFE35CVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);