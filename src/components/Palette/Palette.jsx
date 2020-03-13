import React from "react";
import PickerIcon from "./PickerIcon.jsx";
import { PICKER_TYPE } from "common/Constant";
const Palette = ({ textColor, backgroundColor, onChange }) => {
  const paletteWrapper = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px"
  };

  return (
    <div className="paletteWrapper" style={paletteWrapper}>
      <PickerIcon
        pickerType={PICKER_TYPE.BACKGROUND}
        hexColor={backgroundColor}
        iconName="bg-colors"
        pickerHandler={onChange}
      />
      <PickerIcon
        pickerType={PICKER_TYPE.TEXT}
        hexColor={textColor}
        iconName="font-colors"
        pickerHandler={onChange}
      />
    </div>
  );
};

export default Palette;
