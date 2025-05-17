import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_8RXEtTVT8gQS-ki0fIcCg_Ckl5aXFXs",
  authDomain: "coffeestore-5759a.firebaseapp.com",
  projectId: "coffeestore-5759a",
  storageBucket: "coffeestore-5759a.firebasestorage.app",
  messagingSenderId: "34489041588",
  appId: "1:34489041588:web:059be51300c2e966ae0de1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)