import React, { Component } from "react";
import { CirclePicker, HuePicker } from "react-color";

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
          <div className="circlePicker">
            <CirclePicker color={color} onChange={onChange} />
          </div>
          <div className="huePicker">
            <HuePicker color={color} onChange={onChange} />
          </div>
        </div>
      </>
    );
  }
}

export default Palette;
