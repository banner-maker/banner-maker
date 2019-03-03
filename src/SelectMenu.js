import React, { Component } from "react";
import { Select } from "antd";

class SelectMenu extends Component {
  render() {
    const Option = Select.Option;
    const { selectList, typeLabel, handleChange } = this.props;

    const optionList = selectList.map((font, index) => (
      <Option value={font} key={index}>
        {font}
      </Option>
    ));

    return (
      <>
        <div className="editoritem">
          <Select
            className="fontSelect"
            defaultValue={typeLabel}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            {optionList}
          </Select>
        </div>
      </>
    );
  }
}

export default SelectMenu;
