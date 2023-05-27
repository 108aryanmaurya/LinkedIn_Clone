// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4BqsaeI7m_a6lqTb6f7HwaLXs8-ssovM",
  authDomain: "linkedin-clone-25003.firebaseapp.com",
  projectId: "linkedin-clone-25003",
  storageBucket: "linkedin-clone-25003.appspot.com",
  messagingSenderId: "632431775044",
  appId: "1:632431775044:web:5fc5e982d386f7ddc11b11",
  measurementId: "G-42735XSGDW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage=getStorage(app)
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);
