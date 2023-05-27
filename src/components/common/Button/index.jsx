import React from "react";
import "./index.scss";
const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="common-btn">
      {title}
    </button>
  );
};

export default Button;
