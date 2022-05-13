import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

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
export const db = getFirestore(app);

