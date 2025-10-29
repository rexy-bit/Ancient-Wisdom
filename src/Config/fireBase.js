// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH-XL672ZOMmQl9JTpqWkXjTJqSyKegQk",
  authDomain: "ancientwisdom-912e0.firebaseapp.com",
  projectId: "ancientwisdom-912e0",
  storageBucket: "ancientwisdom-912e0.firebasestorage.app",
  messagingSenderId: "492378998939",
  appId: "1:492378998939:web:cc08c7eae6d3873ebd1e3e",
  measurementId: "G-D7TV3ZDWXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);