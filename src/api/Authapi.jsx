import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router";

export const LoginApi = async (email, password) => {
  // return ("hello loginapi")
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    // console.log(response)
    return response;
  } catch (error) {
    return error;
  }
};
export const RegisterApi = async (email, password) => {
  // return ("hello loginapi")
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(response)
    return response;
  } catch (error) {
    return error;
  }
};

export const GoogleSigninAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};

export const OnLogout = () => {
  try {
    signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
