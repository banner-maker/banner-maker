import React, { useState } from "react";
import MyColorPicker from "./MyColorPicker";
import { Icon } from "antd";

const PickerIcon = ({
  hexColor,
  rectColor,
  pickerType,
  iconName,
  pickerHandler
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleClick = () => {
    console.log("click");
    setShowPicker(!showPicker);
  };

  const colorRect = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    border: "1px solid #fff",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "5px",
    backgroundColor: rectColor || hexColor
  };

  function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }

  const icon = {
    color: rectColor ? "white" : getContrastYIQ(hexColor.slice(-6)),
    fontSize: "1.6em"
  };

  const popover = {
    position: "absolute",
    zIndex: "2",
    top: "-192px",
    left: "-75px"
  };

  // popover will be removed when you click the cover
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px"
  };

  return (
    <div className="pickerWrapper" style={{ position: "relative" }}>
      <div
        className="colorRect"
        style={colorRect}
        onClick={() => handleClick()}>
        <Icon type={iconName} style={icon} />
      </div>
      {showPicker && (
        <div style={popover}>
          <div style={cover} onClick={() => handleClose()} />
          <MyColorPicker
            pickerType={pickerType}
            color={hexColor}
            onChangeComplete={pickerHandler}
          />
        </div>
      )}
    </div>
  );
};

export default PickerIcon;
