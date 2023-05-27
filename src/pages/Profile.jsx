import React, { useEffect, useState, useMemo } from "react";
import ProfileComponent from "../components/ProfileComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader/Loader";
function Profile({ currentUser }) {
  const [loading, setloading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setloading(false);
      }
    });
  }, []);
  useMemo(() => {
    console.log(currentUser);
  }, []);

  return loading ? (
    <Loader></Loader>
  ) : (
    <ProfileComponent currentUser={currentUser}></ProfileComponent>
  );
}
export default Profile;
