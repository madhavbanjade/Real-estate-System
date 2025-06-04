// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e6eea.firebaseapp.com",
  projectId: "mern-estate-e6eea",
  storageBucket: "mern-estate-e6eea.appspot.com",
  messagingSenderId: "926129835046",
  appId: "1:926129835046:web:78ed3f2f826696463eaae7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
