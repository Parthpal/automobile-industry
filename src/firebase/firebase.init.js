// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg3-IGvY96vdeMlY8cjgfAG4_DRAf5Lus",
  authDomain: "ph-automotive.firebaseapp.com",
  projectId: "ph-automotive",
  storageBucket: "ph-automotive.appspot.com",
  messagingSenderId: "25472219726",
  appId: "1:25472219726:web:6b5fa7914037e16ecb611f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;