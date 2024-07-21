import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-cf50e.firebaseapp.com",
  projectId: "store-tutorial-cf50e",
  storageBucket: "store-tutorial-cf50e.appspot.com",
  messagingSenderId: "205377751545",
  appId: "1:205377751545:web:5a44930636b9ecdb831528"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);