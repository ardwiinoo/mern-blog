import React from "react";
import { loginBg } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img src={loginBg} alt="preview" className="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
