import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <>
        <div className="inputWrapper">
          <input
            className="textInput"
            onChange={this.props.onChange}
            type="text"
            size="40"
            placeholder="Type text here!"
          />
        </div>
      </>
    );
  }
}

export default TextInput;
