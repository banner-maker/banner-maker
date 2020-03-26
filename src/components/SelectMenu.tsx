import React from "react";
import { Select } from "antd";

interface SelectMenuProps {
  selectList: [string | number];
  typeLabel: string;
  handleChange: (option: string) => void;
}

const SelectMenu: React.FC<SelectMenuProps> = ({
  selectList,
  typeLabel,
  handleChange
}) => {
  const optionList = selectList.map((option, index) => (
    <Select.Option value={option} key={index}>
      {option}
    </Select.Option>
  ));

  return (
    <div className="editoritem">
      <Select
        className="fontSelect"
        defaultValue={typeLabel}
        style={{ width: 120 }}
        onChange={handleChange}>
        {optionList}
      </Select>
    </div>
  );
};

export default SelectMenu;
