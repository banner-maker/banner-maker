import React, { useState } from "react";
import MyColorPicker from "./MyColorPicker";
import { PICKER_TYPE } from "common/Constant";
import { getContrastYIQ } from "common/Utils";
import { Icon } from "antd";

const PickerIcon = ({ hexColor, pickerType, iconName, pickerHandler }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleClick = () => {
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
    backgroundColor:
      pickerType === PICKER_TYPE.BACKGROUND
        ? hexColor
        : getContrastYIQ(hexColor.slice(-6))
  };

  const icon = {
    color:
      pickerType === PICKER_TYPE.BACKGROUND
        ? getContrastYIQ(hexColor.slice(-6))
        : hexColor,
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

  const handleChange = (colors, event) => {
    pickerHandler({ ...colors, event, pickerType });
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
            color={hexColor}
            onChangeComplete={handleChange}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default PickerIcon;
