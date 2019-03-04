import React, { Component } from "react";
import SelectMenu from "../SelectMenu";

class Editor extends Component {
  render() {
    const {
      fontFamilyList,
      fontSizeList,
      handleFontFamily,
      handleFontSize
    } = this.props;
    return (
      <>
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
      </>
    );
  }
}

export default Editor;
