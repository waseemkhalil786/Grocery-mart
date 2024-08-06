// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1DmG-uBYHhg9fZHvzMMmAm_nilua1Kv8",
  authDomain: "grocery-store-e1396.firebaseapp.com",
  projectId: "grocery-store-e1396",
  storageBucket: "grocery-store-e1396.appspot.com",
  messagingSenderId: "54627962492",
  appId: "1:54627962492:web:88d9540f5306858a5143f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = await getAuth(app);

// export let checking ="WK developer"
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
