import React, { useMemo, useState } from "react";
import "./index.scss";

// import { Button } from "antd";
// import Button from "../Button";
import { OnLogout } from "../../../api/Authapi";
import { useNavigate } from "react-router";
import { getCurrentuser } from "../../../api/FireStoreAPI";
import Button from "../Button";
function ProfilePopup() {
  const [currentUser, setcurrentUser] = useState({});

  useMemo(() => {
    getCurrentuser(setcurrentUser);
  }, []);
  console.log(currentUser);
  let navigate = useNavigate();
  return (
    <>
      <div className="popup-card">
        <p className="name">
          {/* {currentUser.name} */}
          Aryan maurya
        </p>

        <p className="heading">{/* {currentUser.headLine} */}I a develper</p>

        <Button
          title="View Profile"
          onClick={() => {
            navigate("/profile", {
              state: {
                id: currentUser?.userId,
              },
            });
          }}
        ></Button>
        <Button title="Logout" onClick={OnLogout}></Button>
      </div>
    </>
  );
}

export default ProfilePopup;
