import React from "react";
import "./createBlog.scss";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();

  return (
    <div className="blog-post">
      <Link
        title="Kembali"
        onClick={() => {
          navigate("/");
        }}
      />
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={40} />
    </div>
  );
}

export default CreateBlog;
