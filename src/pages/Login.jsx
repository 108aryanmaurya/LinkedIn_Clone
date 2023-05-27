import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import LoginComponent from "../components/LoginComponent";

import { LoginApi } from "../api/Authapi";
import { useNavigate } from "react-router";
import Loader from "../components/common/Loader/Loader";
const Login = () => {
  const [loading, setloading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setloading(false);
      }
    });
  }, []);

  return loading ? <Loader></Loader> : <LoginComponent></LoginComponent>;
};

export default Login;
