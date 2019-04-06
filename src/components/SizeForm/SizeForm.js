import React from "react";
import { Input } from "antd";
import "./SizeForm.scss";

const SizeForm = ({ width, height, onInputChange }) => (
  <div className="SizeForm">
    <Input
      addonBefore="width"
      className="SizeForm__input"
      name="width"
      value={width}
      onChange={onInputChange}
    />
    <Input
      addonBefore="height"
      className="SizeForm__input"
      name="height"
      value={height}
      onChange={onInputChange}
    />
  </div>
);

export default SizeForm;
