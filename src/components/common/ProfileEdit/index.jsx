import React, { useState } from "react";
import "./index.scss";
import { AiOutlineClose } from "react-icons/ai";
import { editProfile } from "../../../api/FireStoreAPI";
function ProfileEdit({ onEdit, currentUser }) {
  const [editinput, seteditinput] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = {
      [name]: value,
    };
    seteditinput({ ...editinput, ...input });
  };

  const updateProfiledata = () => {
    editProfile(currentUser?.id, editinput);
    onEdit();
  };

  console.log(editinput);
  return (
    <div className="post-card">
  
      <div className="edit-btn">
        <AiOutlineClose
          size={25}
          className="close"
          onClick={onEdit}
        ></AiOutlineClose>
      </div>
      <div className="profile-edit-inputs">
        <label htmlFor="">Name</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="name"
          value={editinput.name}
          placeholder="Name"
        />
        <label htmlFor="">Headline</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="headLine"
          value={editinput.headLine}
          placeholder="HeadLine"
        />
        <label htmlFor="">Location</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="location"
          value={editinput.location}
          placeholder="Location"
        />
        <label htmlFor="">City</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="city"
          value={editinput.city}
          placeholder="City"
        />
        <label htmlFor="">Company</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="company"
          value={editinput.company}
          placeholder="Company"
        />

        <label htmlFor="">Industry</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="industry"
          value={editinput.industry}
          placeholder="Industry"
        />
        <label htmlFor="">College</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="college"
          value={editinput.college}
          placeholder="College"
        />
        <label htmlFor="">Website</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="website"
          value={editinput.website}
          placeholder="Website"
        />
        <label htmlFor="">About</label>
        <textarea
          onChange={getInput}
          className="common-textarea"
          type="text"
          name="about"
          value={editinput.about}
          placeholder="Aboutme"
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="">Skills</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          name="skills"
          value={editinput.skills}
          placeholder="Skills"
        />
      </div>
      <div className="save-cont">
        <button className="sav-btn" onClick={updateProfiledata}>
          {" "}
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfileEdit;
