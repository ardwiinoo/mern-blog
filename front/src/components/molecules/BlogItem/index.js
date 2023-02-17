import React from "react";
import { registerBg } from "../../../assets";
import "./blogItem.scss";

function BlogItem() {
  return (
    <div className="blog-item">
      <img src={registerBg} alt="post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">lorem ipsup dolor sir amet aowkwokwokwowkowkowk</p>
      </div>
    </div>
  );
}

export default BlogItem;
