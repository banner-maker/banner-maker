import React, { Component } from "react";
import { Icon } from "antd";
import "./SideTab.scss";
const PROFILE_LINK = "https://github.com/godori";

class SideTab extends Component {
  render() {
    return (
      <>
        <div className="sidetab">
          <Icon
            onClick={() => {
              window.open(`${PROFILE_LINK}/banner-maker`);
            }}
            type="github"
            style={{ fontSize: "30px", color: "#eee" }}
          />
        </div>
      </>
    );
  }
}

export default SideTab;
