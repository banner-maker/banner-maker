import React, { Component } from "react";
import { CirclePicker } from "react-color";

class Palette extends Component {
  render() {
    let { color, onChange } = this.props;
    const divStyle = {
      backgroundColor: color
    };
    return (
      <>
        <div className="sampleRect" style={divStyle} />
        <div className="hexLabel">{color}</div>
        <div className="paletteWrapper">
          <CirclePicker color={color} onChange={onChange} />
        </div>
      </>
    );
  }
}

export default Palette;
