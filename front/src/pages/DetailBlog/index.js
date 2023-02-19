import React from "react";
import { registerBg } from "../../assets";
import { Gap, Link } from "../../components";
import "./detailBlog.scss";
import { useNavigate } from "react-router-dom";

function DetailBlog() {
  const navigate = useNavigate();

  return (
    <div className="detail-blog-wrapper">
      <img src={registerBg} alt="thumb" className="img-cover" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">Content Detail</p>
      <Gap height={20} />
      <Link
        title="Kembali Ke Blog"
        onClick={() => {
          navigate("/");
        }}
      />
      <Gap height={20} />
    </div>
  );
}

export default DetailBlog;
