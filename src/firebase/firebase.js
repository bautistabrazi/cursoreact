// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2j0niRLU-e70YgOjmJ1HF_liZ1wdCo3o",
  authDomain: "bb-mobiles.firebaseapp.com",
  projectId: "bb-mobiles",
  storageBucket: "bb-mobiles.appspot.com",
  messagingSenderId: "401696190272",
  appId: "1:401696190272:web:f6091aebd4a9344798d4a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)