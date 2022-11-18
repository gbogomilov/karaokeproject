// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBlsi22h3NN3J37PMqmFXz7K-lEv-GDx_0",
  authDomain: "karaoke-be.firebaseapp.com",
  projectId: "karaoke-be",
  storageBucket: "karaoke-be.appspot.com",
  messagingSenderId: "184959279190",
  appId: "1:184959279190:web:77b4268069650bc0ce5bf7",
  measurementId: "G-J09T2Z8J99",
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
