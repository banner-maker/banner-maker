import React from "react";
import { Icon } from "antd";
import "./Footer.scss";
const PROFILE_LINK = "https://github.com/godori";

const Footer = ({ project }) => {
  return (
    <div className="Footer">
      <div className="footerContent">
        <Icon
          type="github"
          onClick={() => window.open(`${PROFILE_LINK}/${project}`)}
        />
        <div className="godori" onClick={() => window.open(PROFILE_LINK)}>
          © {new Date().getFullYear()} ・ GODORI
        </div>
      </div>
    </div>
  );
};

export default Footer;
