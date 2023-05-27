import React, { useState } from "react";
import "./index.scss";
import ProfilePopup from "../ProfilePopup";
import linkedin_logo from "../../../assets/linkedin_logo.png";
import user from "../../../assets/user.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";

import { BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router";
function Topbar() {
  const [popVisible, setpopVisible] = useState(false);
  let navigate = useNavigate();
  const gotoRoute = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setpopVisible(!popVisible);
  };
  return (
    <div className="topbar-main">
      {popVisible ? (
        <div className="popup-position">
          <ProfilePopup></ProfilePopup>:
        </div>
      ) : (
        ""
      )}
      <img className="homepg-logo" src={linkedin_logo} alt="" />
      <div className="react-icons">
        <div className="react-icon">
          {" "}
          <AiOutlineHome
            onClick={() => {
              gotoRoute("/home");
            }}
            size={40}
          ></AiOutlineHome>
        </div>
        <div className="react-icon">
          {" "}
          <AiOutlineUserSwitch size={40}></AiOutlineUserSwitch>
        </div>
        <div className="react-icon">
          <BsBriefcase size={40}></BsBriefcase>
        </div>
        <div className="react-icon">
          <AiOutlineSearch size={40}></AiOutlineSearch>
        </div>
        <div className="react-icon">
          {" "}
          <AiOutlineMessage size={40}></AiOutlineMessage>
        </div>
        <div className="react-icon">
          {" "}
          <AiOutlineBell size={40}></AiOutlineBell>
        </div>
      </div>
      <div onClick={displayPopup}>
        <img className="user-img" src={user} alt="" />
      </div>
    </div>
  );
}

export default Topbar;
