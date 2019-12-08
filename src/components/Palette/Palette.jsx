import React, { useState } from "react";
import PickerIcon from "./PickerIcon.jsx";
import { PICKER_TYPE } from "common/Constant";
const Palette = ({ color, onChange }) => {
  const [pickerType, setPickerType] = useState("BACKGROUND");

  const paletteWrapper = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px"
  };

  return (
    <div className="paletteWrapper" style={paletteWrapper}>
      <PickerIcon rectColor="#282c34" hexColor={color} iconName="picture" />
      <PickerIcon
        pickerType={PICKER_TYPE.BACKGROUND}
        hexColor={color}
        iconName="bg-colors"
        pickerHandler={onChange}
      />
      <PickerIcon
        pickerType={PICKER_TYPE.TEXT}
        rectColor="#282c34"
        hexColor={color}
        iconName="font-colors"
        pickerHandler={onChange}
      />
    </div>
  );
};

export default Palette;
