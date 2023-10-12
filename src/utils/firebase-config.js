
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYpywVI7QgAUPuAaBCEE7_0Kwc5JYj-pc",
  authDomain: "netflix-clone-a3bc1.firebaseapp.com",
  projectId: "netflix-clone-a3bc1",
  storageBucket: "netflix-clone-a3bc1.appspot.com",
  messagingSenderId: "904844388172",
  appId: "1:904844388172:web:452256936a490b17a691e9",
  measurementId: "G-QZLPRYHH2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);