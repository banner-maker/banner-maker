import React, { Component } from "react";
import { Icon } from "antd";
const GITHUB_PROJECT_LINK = "https://github.com/godori/banner-maker";
const GITHUB_PROFILE_LINK = "https://github.com/godori";

class Footer extends Component {
  handleClick = type => {
    console.log(type);

    window.open(type === "profile" ? GITHUB_PROFILE_LINK : GITHUB_PROJECT_LINK);
  };

  render() {
    const year = new Date().getFullYear();
    const goLink = this.handleClick;
    return (
      <>
        <div className="Footer">
          <div className="footerContent">
            <Icon type="github" onClick={() => goLink()} />
            <div className="godori" onClick={() => goLink("profile")}>
              © {year} ・ GODORI
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
