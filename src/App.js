import React, { Component } from "react";
import "./styles/App.scss";
import "antd/dist/antd.css";
import Palette from "./Palette";
import Preview from "./Preview";
import TextInput from "./TextInput";
import Header from "./Header";

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
    const { colorType, color, text, href } = this.state;
    return (
      <div className="App">
        <Header />
        <Preview
          color={color}
          text={text}
          href={href}
          updateCanvas={this.handleCanvasChange}
        />
        <TextInput onChange={this.handleTextChange} />
        <Palette
          colorType={colorType}
          color={color}
          onChange={this.handleChange}
        />
        <a href={href} className="downbutton" download="banner-image.png">
          Download (PNG)
        </a>
      </div>
    );
  }
}

export default App;
