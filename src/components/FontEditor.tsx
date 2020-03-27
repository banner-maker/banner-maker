import React from "react";
import SelectMenu from "./SelectMenu";

interface FontEditorProps {
  fontFamilyList: string[];
  fontSizeList: string[];
  onFontFamilyChange: (fontFamily: string) => void;
  onFontSizeChange: (fontSize: string) => void;
}

const FontEditor: React.FC<FontEditorProps> = ({
  fontFamilyList,
  fontSizeList,
  onFontFamilyChange,
  onFontSizeChange
}) => {
  return (
    <div className="editorWrapper">
      <SelectMenu
        typeLabel="font-family"
        selectList={fontFamilyList}
        handleChange={onFontFamilyChange}
      />
      <SelectMenu
        typeLabel="font-size"
        selectList={fontSizeList}
        handleChange={onFontSizeChange}
      />
    </div>
  );
};

export default FontEditor;
