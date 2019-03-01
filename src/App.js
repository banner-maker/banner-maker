import React, { Component } from "react";
import "./App.css";
import Palette from "./Palette";
import Preview from "./Preview";
import TextInput from "./TextInput";

class App extends Component {
  state = {
    colorType: "background",
    color: "#ccc",
    text: "Sample Text",
    href: ""
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

  handleCanvasChange = href => {
    this.setState({ href });
  };

  render() {
    const { color, text, href } = this.state;
    return (
      <div className="App">
        <Preview
          color={color}
          text={text}
          href={href}
          updateCanvas={this.handleCanvasChange}
        />
        <TextInput onChange={this.handleTextChange} />
        <Palette color={color} onChange={this.handleChange} />
        <a href={href} className="downbutton" download="banner-image.png">
          Download (PNG)
        </a>
      </div>
    );
  }
}

export default App;
