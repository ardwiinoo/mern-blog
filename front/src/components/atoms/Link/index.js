import React from "react";
import "./link.scss";

function Link({ title, onClick }) {
  return (
    <p onClick={onClick} className="link">
      {title}
    </p>
  );
}

export default Link;
