// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0AgWzb0kxR8BsxgF1owTzDEGfvDE374k",
  authDomain: "house-marketplace-app-2b63b.firebaseapp.com",
  projectId: "house-marketplace-app-2b63b",
  storageBucket: "house-marketplace-app-2b63b.appspot.com",
  messagingSenderId: "1007682582523",
  appId: "1:1007682582523:web:0dd7e7ee298e6e684b3d5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
