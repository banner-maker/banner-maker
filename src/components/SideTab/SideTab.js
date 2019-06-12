import React, { Component } from "react";
import "./SideTab.scss";
import SideItem from "../../components/SideItem";
import SidePane from "./SidePane";
const PROFILE_LINK = "https://github.com/godori";

class SideTab extends Component {
  state = {
    curMenu: { iconType: "", label: "" },
    isActive: false,
    menus: [
      { iconType: "notification", label: "notice" },
      { iconType: "drag", label: "canvas" },
      { iconType: "picture", label: "image" }
    ]
  };

  handleGithubClick = () => {
    window.open(`${PROFILE_LINK}/banner-maker`);
  };

  handleSideToggle = menu => {
    const { isActive, curMenu } = this.state;

    if (curMenu.label === "" || !isActive) {
      this.setState({ isActive: !isActive, curMenu: menu });
      return;
    }

    isActive && menu.label === curMenu.label
      ? this.setState({ isActive: !isActive })
      : this.setState({ curMenu: menu });
  };

  render() {
    const { curMenu, isActive, menus } = this.state;

    return (
      <div className="sidetab">
        {menus.map((menu, idx) => (
          <SideItem
            key={idx}
            menu={menu}
            isActive={isActive}
            onClick={this.handleSideToggle}
          />
        ))}
        <SideItem
          menu={{ iconType: "github", label: "github" }}
          onClick={this.handleGithubClick}
        />
        {isActive && <SidePane menu={curMenu.label} />}
      </div>
    );
  }
}

export default SideTab;
