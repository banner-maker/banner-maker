import React from "react";

const Input = ({ color, onChange }) => {
  return (
    <div className="inputWrapper">
      <input
        className="textInput"
        onChange={onChange}
        style={{ color }}
        type="text"
        size="40"
        placeholder="Type text here :)"
      />
    </div>
  );
};
export default Input;
