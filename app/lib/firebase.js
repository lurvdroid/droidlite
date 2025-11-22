// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW9nYRRlyE91xHvpU2ZbHJxflzBaXv3ec",
  authDomain: "droidlite-fe876.firebaseapp.com",
  projectId: "droidlite-fe876",
  storageBucket: "droidlite-fe876.firebasestorage.app",
  messagingSenderId: "644393041734",
  appId: "1:644393041734:web:6f15677972429e6a6a6f47",
  measurementId: "G-HFW05L1P2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
