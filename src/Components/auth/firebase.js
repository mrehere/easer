// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2dkY2pqPj0C24frxPuZx0QcQXp6eqU4w",
  authDomain: "fir-d45f0.firebaseapp.com",
  projectId: "fir-d45f0",
  storageBucket: "fir-d45f0.appspot.com",
  messagingSenderId: "109825849896",
  appId: "1:109825849896:web:72964ae87bd38e113b531d",
  measurementId: "G-JDXWDQRYWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
