import React from "react";
import SelectMenu from "../SelectMenu";
import { Icon, Switch } from "antd";
// import { PICKER_TYPE } from "../../common/Constant";

const Editor = ({
  fontFamilyList,
  fontSizeList,
  handleFontFamily,
  handleFontSize
  // colorType
}) => {
  // const handleColorModeChange = checked => {
  //   const { handleColorType, colorType } = this.props;
  //   handleColorType(
  //     colorType === COLOR_TYPE.BACKGROUND
  //       ? COLOR_TYPE.FONT
  //       : COLOR_TYPE.BACKGROUND
  //   );
  // };

  return (
    <div className="editorWrapper">
      <SelectMenu
        typeLabel="font-family"
        selectList={fontFamilyList}
        handleChange={handleFontFamily}
      />
      <SelectMenu
        typeLabel="font-size"
        selectList={fontSizeList}
        handleChange={handleFontSize}
      />
      {/* <Switch
        checkedChildren={<Icon type="bg-colors" />}
        unCheckedChildren={<Icon type="font-colors" />}
        checked={colorType === COLOR_TYPE.BACKGROUND}
        onChange={handleColorModeChange}
      /> */}
    </div>
  );
};

export default Editor;
