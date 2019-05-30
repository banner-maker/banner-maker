import React, { Component } from "react";
import "./styles/App.scss";
import "antd/dist/antd.css";
import SizeForm from "./components/SizeForm";
import Palette from "./components/Palette";
import Preview from "./components/Preview";
import Input from "./components/Input";
import Header from "./components/Header";
import Editor from "./components/Editor";
import { COLOR_TYPE } from "./common/Constant";
import SideTab from "./components/SideTab/SideTab";

class App extends Component {
  state = {
    colorType: COLOR_TYPE.BACKGROUND,
    width: "700",
    height: "350",
    backgroundColor: "#ccc",
    fontColor: "white",
    text: "Sample Text",
    href: "",
    fontFamily: "SF Pro",
    fontFamilyList: ["SF Pro", "Times New Roman", "Helvetica", "Courier"],
    fontSizeList: [20, 30, 40, 50, 60, 70, 80, 90, 100, 120],
    fontSize: "40",
    lineHeight: 1.4
  };

  componentDidMount() {
    this.setState({ backgroundColor: this.getRandomColor() });
  }

  handleChange = color => {
    const { colorType } = this.state;
    this.setState({ [`${colorType}Color`]: color.hex });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFontSize = fontSize => {
    this.setState({ fontSize });
  };

  handleFontFamily = fontFamily => {
    this.setState({ fontFamily });
  };

  handleColorType = colorType => {
    this.setState({ colorType });
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
      backgroundColor,
      fontColor,
      href,
      fontSize,
      fontFamily,
      fontFamilyList,
      fontSizeList,
      lineHeight,
      width,
      height
    } = this.state;
    const renderedText = require("markdown-it")().use(require("markdown-it-emoji")).renderInline(this.state.text);
    return (
      <div className="App">
        <Header />
        <SideTab />
        <div className="content">
          <SizeForm
            width={width}
            height={height}
            onInputChange={this.handleInputChange}
          />
          <Preview
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            text={renderedText}
            href={href}
            width={width}
            height={height}
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}
            updateCanvas={this.handleCanvasChange}
          />
          <Input color={fontColor} onChange={this.handleInputChange} />
          <Editor
            colorType={colorType}
            fontFamilyList={fontFamilyList}
            fontSizeList={fontSizeList}
            handleFontSize={this.handleFontSize}
            handleFontFamily={this.handleFontFamily}
            handleColorType={this.handleColorType}
          />
          <Palette
            color={this.state[`${colorType}Color`]}
            onChange={this.handleChange}
          />
          <a href={href} className="downbutton" download="banner-image.png">
            Download
          </a>
        </div>
      </div>
    );
  }
}

export default App;
