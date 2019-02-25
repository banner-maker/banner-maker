import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <>
        <input
          className="textInput"
          onChange={this.props.onChange}
          type="text"
          size="40"
          placeholder="type text here"
        />
      </>
    );
  }
}

export default TextInput;
