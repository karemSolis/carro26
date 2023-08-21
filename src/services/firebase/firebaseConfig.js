// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3gvlXr286KoAw2yfCBoRjXn_ePB1vV0c",
  authDomain: "proyectoacademicoreactk.firebaseapp.com",
  projectId: "proyectoacademicoreactk",
  storageBucket: "proyectoacademicoreactk.appspot.com",
  messagingSenderId: "903262269",
  appId: "1:903262269:web:f66ed2ca8e983e70abba54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)