import React, { Component } from "react";
import SelectMenu from "../SelectMenu";
import { Icon, Switch } from 'antd';
import { COLOR_TYPE } from '../../common/Constant';

class Editor extends Component {

  handleColorModeChange = (checked) => {
    const { handleColorType, colorType } = this.props;
    handleColorType(colorType === COLOR_TYPE.BACKGROUND ? COLOR_TYPE.FONT: COLOR_TYPE.BACKGROUND);
  };

  render() {
    const {
      fontFamilyList,
      fontSizeList,
      handleFontFamily,
      handleFontSize,
      colorType
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
          <Switch 
            checkedChildren={<Icon type="check"/>} 
            unCheckedChildren={<Icon type="close"/>}
            checked={colorType === COLOR_TYPE.BACKGROUND}
            onChange={this.handleColorModeChange}
          />
        </div>
      </>
    );
  }
}

export default Editor;
