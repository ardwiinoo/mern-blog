import React from "react";
import {
  ICFacebook,
  ICGithub,
  ICInstagram,
  logoMongoDB,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img src={img} alt="icon" className="icon-medsos" />
    </div>
  );
};

function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={logoMongoDB} alt="logo-blog" className="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICGithub} />
          <Icon img={ICInstagram} />
        </div>
      </div>
      <div className="copyright">
        <p>&copy; ardwiinoo</p>
      </div>
    </div>
  );
}

export default Footer;
