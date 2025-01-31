/* globals process */
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "healthdonald-project.firebaseapp.com",
  projectId: "healthdonald-project",
  storageBucket: "healthdonald-project.firebasestorage.app",
  messagingSenderId: "951755478666",
  appId: "1:951755478666:web:1fb669647d36ac2935bf73",
};

export const app = initializeApp(firebaseConfig);
