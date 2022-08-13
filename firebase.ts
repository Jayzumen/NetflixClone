// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuP5HIgkHqHrGacLyWMzBM45DVHhsK2vw",
  authDomain: "netflix-clone-2-36cb9.firebaseapp.com",
  projectId: "netflix-clone-2-36cb9",
  storageBucket: "netflix-clone-2-36cb9.appspot.com",
  messagingSenderId: "543676192528",
  appId: "1:543676192528:web:733996441c66dd0b97f795",
};

// Initialize Firebase
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
