import React from "react";
import "./createBlog.scss";
import { Input, Button, Upload, TextArea, Gap } from "../../components";

function CreateBlog() {
  return (
    <div className="blog-post">
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
