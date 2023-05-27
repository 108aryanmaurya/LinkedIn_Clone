import React, { useMemo, useState } from "react";
import "./index.scss";
import { getallusers } from "../../../api/FireStoreAPI";
import { getCurrentuser } from "../../../api/FireStoreAPI";
import LikeButton from "../LikeButton";
import { useNavigate } from "react-router";
function Postcard({ post2 }) {
  const [allusers, setallusers] = useState([]);
  let navigate = useNavigate();
  const [currentuser, setcurrentser] = useState({});
  useMemo(() => {
    getCurrentuser(setcurrentser);
    getallusers(setallusers);
  }, []);
  console.log(allusers);
  // func();
  // console.log(post2.id);
  // console.log(currentuser.id);
  return (
    <div className="post-card" key={post2.userId}>
      <p
        onClick={() => {
          navigate("/profile", {
            state: { id: post2?.userId, email: post2.email },
          });
        }}
        className="name"
      >
        {" "}
        {post2.name}
      </p>
      <p className="timestamp">{post2.timeStamp}</p>
      <p className="status">{post2.status}</p>
      <LikeButton
        currentUser={currentuser}
        postId={post2.id}
        userId={currentuser?.id}
      ></LikeButton>
    </div>
  );
}

export default Postcard;
