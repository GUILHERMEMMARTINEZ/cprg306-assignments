import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cprg306-assigments.firebaseapp.com",
  projectId: "cprg306-assigments",
  storageBucket: "cprg306-assigments.appspot.com",
  messagingSenderId: "953635616964",
  appId: "1:953635616964:web:4bf4fbdb91e908b9a2b191"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
