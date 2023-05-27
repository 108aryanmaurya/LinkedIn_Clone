import React, { useMemo, useState } from "react";
import { getCurrentuser } from "../api/FireStoreAPI";
import Topbar from "../components/common/Topbar";
import Profile from "../pages/Profile";

function ProfileLayout() {
  const [currentUser, setcurrentUser] = useState({});
  useMemo(() => {
    getCurrentuser(setcurrentUser);
    console.log(currentUser);
  }, []);

  return (
    <div>
      <Topbar></Topbar>
      <Profile currentUser={currentUser}></Profile>
    </div>
  );
}

export default ProfileLayout;
