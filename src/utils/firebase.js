// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSLdJVSWyROT1C2rRgaIGxa8kDGSD6SEc",
  authDomain: "netflixgpt-96457.firebaseapp.com",
  projectId: "netflixgpt-96457",
  storageBucket: "netflixgpt-96457.appspot.com",
  messagingSenderId: "363936743948",
  appId: "1:363936743948:web:fe43d3a521490bdcef6429",
  measurementId: "G-E6CFM7KM7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);