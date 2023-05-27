import React, { useEffect, useState } from "react";
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader/Loader";
function Home({ post }) {
  const [loading, setloading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      console.log(res.accessToken);

      if (!res.accessToken) {
        navigate("/");
      } else {
        setloading(false);
      }
    });
  });

  return loading ? (
    <Loader></Loader>
  ) : (
    <HomeComponent post={post}></HomeComponent>
  );
}

export default Home;
