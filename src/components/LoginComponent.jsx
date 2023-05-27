import React, { useState } from "react";
import "../Sass/LoginComponent.scss";
import { LoginApi, RegisterApi, GoogleSigninAPI } from "../api/Authapi";
import linkedin_logo from "../assets/linkedin_logo.png";
// import { app } from '../firebaseConfig';

import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const LoginComponent = () => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginApi(credentials.email, credentials.password);
      toast.success("signed in to Linkedin");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");

      console.log(res);
    } catch (error) {
      toast.error("Please check your Creds");
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
      <div className="auth-inputs">
        <div className="head">
          <h1 className="heading">Sign In</h1>
          <p className="sub-heading">Stay updated on your professional world</p>
        </div>
        <div>
          <input
            type="email"
            onChange={(event) => {
              setcredentials({ ...credentials, email: event.target.value });
            }}
            className="common-input"
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(event) => {
              setcredentials({ ...credentials, password: event.target.value });
            }}
            className="common-input"
            placeholder="Enter your Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className=" hr-text" data-content="or" />
      <div className="auth-inputs ggl-btn">
        <GoogleButton className="gbtn" onClick={goolesignin} />
      </div>
      <p className="ask">
        New to Linkedin?{" "}
        <span
          className="j-n"
          onClick={() => {
            navigate("/register");
          }}
        >
          {" "}
          Join now
        </span>
      </p>
    </div>
  );
};

export default LoginComponent;
