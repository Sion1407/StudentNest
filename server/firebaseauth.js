// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEuSnIfV6JpQ6pCIMRO7fVQ44mm2KJ-Ho",
  authDomain: "studentnest-1bba6.firebaseapp.com",
  projectId: "studentnest-1bba6",
  storageBucket: "studentnest-1bba6.appspot.com",
  messagingSenderId: "147614692165",
  appId: "1:147614692165:web:b7b2c2e32d551f5a34842c",
  measurementId: "G-M1BC4LZXR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);