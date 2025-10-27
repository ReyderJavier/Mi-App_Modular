// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDat1H13GHdYbWrPkNZq0_QpcGqt54l_q0",
  authDomain: "mi-app-modular-rtt.firebaseapp.com",
  projectId: "mi-app-modular-rtt",
  storageBucket: "mi-app-modular-rtt.firebasestorage.app",
  messagingSenderId: "425466277851",
  appId: "1:425466277851:web:873efa1ae1828daac041fe",
  measurementId: "G-TMH3X0CDYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);