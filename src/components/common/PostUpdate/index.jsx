import React, { useState, useMemo } from "react";
import "./index.scss";
import { getTimeStamp } from "../../../helper/useMoment";
import { postStatus, getStatus } from "../../../api/FireStoreAPI";
import ModalComponent from "../Modal/modal";
import Postcard from "../Postcards";
function PostStatus({ post }) {
  const [allstatus, setallstatus] = useState([]);
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  let userEmail = localStorage.getItem("userEmail");

  const sendStatus = async () => {
    // console.log(post);
    let obj = {
      email: userEmail,
      status: status,
      timeStamp: getTimeStamp("LLL"),
      userId: post.id,
      name: post.name,
    };
    // console.log(obj);
    await postStatus(obj);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setallstatus);
    // console.log(allstatus);
  }, []);
  return (
    <div className="post-main">
      <div className="post-status">
        <button
          className="open-post-modal"
          onClick={() => {
            // console.log({ post });
            setModalOpen(true);
          }}
        >
          Start a Post
        </button>
      </div>

      <ModalComponent
        modalOpen={modalOpen}
        status={status}
        setModalOpen={setModalOpen}
        setStatus={setStatus}
        sendStatus={sendStatus}
      ></ModalComponent>

      <div>
        {allstatus.map((status) => {
          return (
            <Postcard
              post2={status}
              allstatus={allstatus}
              post={post}
            ></Postcard>
          );
        })}
      </div>
    </div>
  );
}

export default PostStatus;
