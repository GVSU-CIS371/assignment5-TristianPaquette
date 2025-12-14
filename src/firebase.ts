import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwRx-X0Y6AgookvlrUmJbIl2JUFr2Y5z8",
  authDomain: "cis371-assignment4-89bab.firebaseapp.com",
  projectId: "cis371-assignment4-89bab",
  storageBucket: "cis371-assignment4-89bab.appspot.com",
  messagingSenderId: "795359785134",
  appId: "1:795359785134:web:1ad0ef65b45507d8a2fd3f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

