import React, { useEffect, useMemo, useState } from "react";
import "./index.scss";

import vanGoh from "./vangoh2.webp";
import { getSingleStatus, getSingleUser } from "../../../api/FireStoreAPI";
import { uploadImage as uploadImageAPI } from "../../../api/Storage";
import { HiOutlinePencil } from "react-icons/hi";
import Postcard from "../Postcards";
import { getStatus, editProfile } from "../../../api/FireStoreAPI";
import ProfileEdit from "../ProfileEdit";
import ProfileComponent from "../../ProfileComponent";
import { useLocation } from "react-router";
import FioleuploadModal from "./index2";
function ProfileCard({ currentUser, onEdit }) {
  let location = useLocation();
  const [currentImage, setcurrentImage] = useState({});
  const [currentProfile, setcurrentProfile] = useState({});
  const [modal2Open, setModal2Open] = useState(false);
  const [progress, setprogress] = useState(0);
  const [allstatus, setallstatus] = useState([]);
  // const [ImageLink, setImageLink] = useState("");
  const getImage = (event) => {
    setcurrentImage(event.target.files);

    // uploadImage(event.target.files)
    console.log(event.target.files);
    console.log(currentImage);
  };

  const uploadImage = () => {
    uploadImageAPI(currentImage, currentUser.id, setModal2Open, setprogress);
    setcurrentImage({});
    // setModal2Open(false);
  };

  useMemo(() => {
    if (location?.state?.id) {
      console.log(location);
      getSingleStatus(setallstatus, location?.state?.id);
    }
    if (location?.state?.email) {
      console.log(location);
      getSingleUser(setcurrentProfile, location?.state?.email);
    }

    console.log(currentUser);
    console.log(currentImage);
    console.log(allstatus);
    console.log(currentProfile);
  }, []);

  // useEffect(() => {
  //   editProfile(currentUser?.id, { ImageLink });
  // }, [ImageLink]);
  return (
    <>
      <FioleuploadModal
        modal2Open={modal2Open}
        setModal2Open={setModal2Open}
        uploadImage={uploadImage}
        getImage={getImage}
        currentImage={currentImage}
        progress={progress}
      />
      <div className="post-card">
        {/* {currentUser.ImageLink?} */}

        <div className="edit-btn">
          <HiOutlinePencil
            className="edit-icon"
            onClick={onEdit}
          ></HiOutlinePencil>
        </div>
        {/* https://firebasestorage.googleapis.com/v0/b/chatmessagedemo-fd41b.appspot.com/o/XamarinMonkeys%2Fimage.jpg?alt=media&token=0cbcb321-fd8c-4476-bf57-472b23076b9b%27 */}
        {/* https://firebasestorage.googleapis.com/v0/b/chatmessagedemo-fd41b.appspot.com/o/XamarinMonkeys%2Fimage.jpg?alt=media&token=0cbcb321-fd8c-4476-bf57-472b23076b9b */}
        <div className="profile-info">
          <img
            onClick={() => {
              setModal2Open(true);
            }}
            className="profile-img"
            src=// {currentUser.ImageLink}
            "https://www.blockchainexpert.uk/blog/Uploads/BlogImage/what-is-web3js-blockchain-decentralized-web-1.jpg" // "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-25003.appspot.com/o/ProfileImages%2Fmyimg.png?alt=media&token=69cfbdf1-6ce6-4a03-94f2-b6b2bfe3baee"
            alt="xyx"
          />
          <div className="profile-left">
            <h3 className="post-name">
              {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name}
            </h3>

            <p className="post-head">
              {Object.values(currentProfile).length === 0
                ? currentUser.headLine
                : currentProfile?.headLine}
            </p>
            <p className="post-loc">
              {Object.values(currentProfile).length === 0
                ? `${currentUser.location},${currentUser.city}`
                : `${currentProfile.location}, ${currentProfile.city}`}
            </p>

            <a
              className="post-web"
              target="_blank"
              href={
                Object.values(currentProfile).length === 0
                  ? currentUser.website
                  : currentProfile.website
              }
            >
              {Object.values(currentProfile).length === 0
                ? currentUser.website
                : currentProfile.website}
            </a>
          </div>
          <div className="profile-right">
            <p className="post-col">
              {Object.values(currentProfile).length === 0
                ? currentUser.college
                : currentProfile?.college}
            </p>
            <p className="post-com">
              {Object.values(currentProfile).length === 0
                ? currentUser.company
                : currentProfile?.company}
            </p>
          </div>
        </div>
        <p className="post-about">
          {Object.values(currentProfile).length === 0
            ? currentUser.about
            : currentProfile?.about}
        </p>
        <p className="post-skills">
          <span className="skill">Skills</span>:&nbsp;
          {Object.values(currentProfile).length === 0
            ? currentUser.skills
            : currentProfile?.skills}
        </p>
      </div>
      <div>
        {allstatus
          .filter((item) => {
            return item.email === currentProfile.email;
          })
          .map((status) => {
            return <Postcard post2={status}></Postcard>;
          })}
      </div>
    </>
  );
}

export default ProfileCard;
