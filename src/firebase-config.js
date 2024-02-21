// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDngwau6ZlEaLz9ERq61_IP2hpwNbj_Us",
  authDomain: "chatapp-6a4b7.firebaseapp.com",
  projectId: "chatapp-6a4b7",
  storageBucket: "chatapp-6a4b7.appspot.com",
  messagingSenderId: "442823206795",
  appId: "1:442823206795:web:2ca8b78c02ff260446718e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);