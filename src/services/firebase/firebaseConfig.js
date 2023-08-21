
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyA3gvlXr286KoAw2yfCBoRjXn_ePB1vV0c",
  authDomain: "proyectoacademicoreactk.firebaseapp.com",
  projectId: "proyectoacademicoreactk",
  storageBucket: "proyectoacademicoreactk.appspot.com",
  messagingSenderId: "903262269",
  appId: "1:903262269:web:f66ed2ca8e983e70abba54"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)