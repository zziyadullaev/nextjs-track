// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnDBViuIldKdaLj_Ce5FnweGY5kAVnliQ",
  authDomain: "expense-tracker-dea1f.firebaseapp.com",
  projectId: "expense-tracker-dea1f",
  storageBucket: "expense-tracker-dea1f.appspot.com",
  messagingSenderId: "496788330774",
  appId: "1:496788330774:web:187371b7b3b701a93e1837",
  measurementId: "G-NK7CNDY7MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);