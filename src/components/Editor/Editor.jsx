import React from "react";
import SelectMenu from "../SelectMenu";
const Editor = ({
  fontFamilyList,
  fontSizeList,
  handleFontFamily,
  handleFontSize
}) => {
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
    </div>
  );
};

export default Editor;
