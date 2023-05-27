import React, { useState } from "react";
import "../Sass/LoginComponent.scss";
import "../Sass/RegisterComponent.scss";
// import getUniqueID
import { postuserdata } from "../api/FireStoreAPI";
import { LoginApi, RegisterApi, GoogleSigninAPI } from "../api/Authapi";
import linkedin_logo from "../assets/linkedin_logo.png";
// import { app } from '../firebaseConfig';

import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const RegisterComponent = () => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({});

  const register = async () => {
    try {
      let res = await RegisterApi(credentials.email, credentials.password);
      toast.success("Account Created");
      console.log(res.user.email);
      localStorage.setItem("userEmail", res.user.email);
      postuserdata({
        // userID: getUniqueID(),
        name: credentials.name,
        email: credentials.email,
      });
      navigate("/home");
    } catch (error) {
      toast.error("Cannot create your Account");
      console.log(error.errors.message);
    }
  };

  const goolesignin = async () => {
    let res = await GoogleSigninAPI();
    console.log(res);
  };

  return (
    <div className="login-wrapper">
      <img src={linkedin_logo} className="linkedin_logo" alt="" />
      <div className="auth-inputs1">
        <div className="head1">
          <h1 className="heading">Make most of your professional life</h1>
        </div>
        <div className="ext-ci">
          <p>Your Name</p>
          <input
            type="text"
            onChange={(event) => {
              setcredentials({ ...credentials, name: event.target.value });
            }}
            className="common-input"
          />
        </div>
        <div className="ext-ci">
          <p>Email or Phone Nuber</p>
          <input
            type="email"
            onChange={(event) => {
              setcredentials({ ...credentials, email: event.target.value });
            }}
            className="common-input"
          />
        </div>

        <div className="ext-ci">
          <p>Password 16 or more characters</p>
          <input
            type="password"
            onChange={(event) => {
              setcredentials({ ...credentials, password: event.target.value });
            }}
            className="common-input"
          />
        </div>
        <button onClick={register} className="login-btn1">
          Agree and Join
        </button>
      </div>
      <hr className=" hr-text" data-content="or" />
      <div className="auth-inputs ggl-btn">
        <GoogleButton className="gbtn1" onClick={goolesignin} />
      </div>
      <p className="ask">
        Already have account?{" "}
        <span
          className="j-n"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Sign up
        </span>
      </p>
    </div>
  );
};

export default RegisterComponent;
