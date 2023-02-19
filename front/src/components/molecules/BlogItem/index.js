import React from "react";
import { registerBg } from "../../../assets";
import "./blogItem.scss";
import { useNavigate } from "react-router-dom";
import { Button, Gap } from "../../atoms";

function BlogItem() {
  const navigate = useNavigate();

  return (
    <div className="blog-item">
      <img src={registerBg} alt="post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">lorem ipsup dolor sir amet aowkwokwokwowkowkowk</p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => {
            navigate("/detail-blog");
          }}
        />
      </div>
    </div>
  );
}

export default BlogItem;
