import React from "react";
import SelectMenu from "./SelectMenu";

interface FontEditorProps {
  fontFamilyList: [string];
  fontSizeList: [string];
  handleFontFamily: (fontFamily: string) => void;
  handleFontSize: (fontSize: string) => void;
}

const FontEditor: React.FC<FontEditorProps> = ({
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

export default FontEditor;
