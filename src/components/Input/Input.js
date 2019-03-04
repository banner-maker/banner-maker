import React from "react";

const Input = ({ onChange }) => {
  return (
    <div className="inputWrapper">
      <input
        className="textInput"
        onChange={onChange}
        type="text"
        size="40"
        placeholder="Type text here :)"
      />
    </div>
  );
};
export default Input;
