import React, { Component } from "react";
import MyColorPicker from "./MyColorPicker";

class Palette extends Component {
  state = {
    displayColorPicker: false
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ color });
  };

  render() {
    let { color, onChange } = this.props;

    const colorRect = {
      width: "40px",
      height: "40px",
      border: "1px solid #fff",
      borderRadius: "4px",
      cursor: "pointer",
      backgroundColor: color.hex
    };

    const popover = {
      position: "absolute",
      zIndex: "2",
      top: "-185px"
    };

    // 배경 커버 클릭 했을 때 팝오버 사라지게 하기 위함
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };

    return (
      <div className="paletteWrapper">
        <div
          className="colorRect"
          style={colorRect}
          onClick={this.handleClick}
        />
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <MyColorPicker color={color} onChangeComplete={onChange} />
          </div>
        ) : null}
        <div className="hexLabel">{color.hex}</div>
      </div>
    );
  }
}

export default Palette;
