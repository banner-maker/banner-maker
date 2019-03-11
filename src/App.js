import React, { Component } from "react";
import "./styles/App.scss";
import "antd/dist/antd.css";
import Palette from "./components/Palette";
import Preview from "./components/Preview";
import Input from "./components/Input";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Editor from "./components/Editor";

class App extends Component {
  state = {
    colorType: "background",
    color: "#ccc",
    text: "Sample Text",
    href: "",
    fontFamily: "SF Pro",
    fontFamilyList: ["SF Pro", "Times New Roman", "Helvetica", "Courier"],
    fontSizeList: [20, 30, 40, 50, 60, 70, 80, 90, 100, 120],
    fontSize: "40",
    lineHeight: 1.4,
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
  handleFontSize = fontSize => {
    this.setState({ fontSize });
  };

  handleFontFamily = fontFamily => {
    this.setState({ fontFamily });
  };

  getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  handleCanvasChange = href => {
    this.setState({ href });
  };

  render() {
    const {
      colorType,
      color,
      text,
      href,
      fontSize,
      fontFamily,
      fontFamilyList,
      fontSizeList,
      lineHeight,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Preview
            color={color}
            text={text}
            href={href}
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}
            updateCanvas={this.handleCanvasChange}
          />
          <Input onChange={this.handleTextChange} />
          <Editor
            colorType={colorType}
            fontFamilyList={fontFamilyList}
            fontSizeList={fontSizeList}
            handleFontSize={this.handleFontSize}
            handleFontFamily={this.handleFontFamily}
          />
          <Palette
            colorType={colorType}
            color={color}
            onChange={this.handleChange}
          />
          <a href={href} className="downbutton" download="banner-image.png">
            Download
          </a>
        </div>
        <Footer project="banner-maker" />
      </div>
    );
  }
}

export default App;
