import React, { useState } from "react";
import ProfileEdit from "./common/ProfileEdit";
import ProfileCard from "./common/ProfileCard";
function ProfileComponent({ currentUser }) {
  const [isEdit, setisEdit] = useState(false);
  const onEdit = () => {
    setisEdit(!isEdit);
  };
  return (
    <>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser}></ProfileEdit>
      ) : (
        <ProfileCard onEdit={onEdit} currentUser={currentUser}></ProfileCard>
      )}{" "}
    </>
  );
}

export default ProfileComponent;
