import React, { Component } from "react";
import "./App.css";
import Palette from "./Palette";
import Preview from "./Preview";
import TextInput from "./TextInput";

class App extends Component {
  state = {
    color: "#ccc",
    text: "Sample Text",
    href: "",
    download: "banner-image.png"
  };

  componentDidMount() {
    this.setState({ color: this.getRandomColor() });
  }

  handleChange = color => {
    this.setState({ color: color.hex });
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickDownload = e => {
    // this.setState({ href:})
    // var href = mainCanvas.toDataURL();
    // this.href = href;
    // this.download = "npjy.png";
  };

  handleCanvasChange = e => {
    console.log("canvas");
  };

  render() {
    const { color, text, href, download } = this.state;
    return (
      <div className="App">
        <Preview color={color} text={text} onChange={this.handleCanvasChange} />
        <TextInput onChange={this.handleTextChange} />
        <Palette color={color} onChange={this.handleChange} />
        <button
          className="downbutton"
          href={href}
          download={download}
          onClick={this.clickDownload}
        >
          Download (PNG)
        </button>
      </div>
    );
  }
}

export default App;
