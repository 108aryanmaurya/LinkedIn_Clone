import React, { useMemo, useState } from "react";
import Home from "../pages/Home";

import Topbar from "../components/common/Topbar";
import { getCurrentuser } from "../api/FireStoreAPI";
function HomeLayout() {
  const [currentUser, setcurrentUser] = useState({});
  useMemo(() => {
    getCurrentuser(setcurrentUser);
    console.log(currentUser);
  }, []);
  return (
    <>
      {" "}
      <Topbar></Topbar>
      <Home post={currentUser}></Home>
    </>
  );
}

export default HomeLayout;
