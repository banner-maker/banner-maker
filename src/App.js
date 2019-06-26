import React, { Component } from "react";
import { Button } from "antd";
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
import ReactGA from "react-ga";
import BgImageSelectModal from "./components/modal/BgImageSelectModal/BgImageSelectModal";
ReactGA.initialize("UA-80202920-2");

class App extends Component {
  state = {
    colorType: COLOR_TYPE.BACKGROUND,
    width: "700",
    height: "350",
    backgroundType: "image",
    backgroundImage: 'https://images.unsplash.com/photo-1503431128871-cd250803fa41?auto=format&fit=crop&w=1600&h=500&q=60',
    backgroundColor: "#ccc",
    fontColor: "white",
    text: "Sample Text",
    href: "",
    fontFamily: "SF Pro",
    fontFamilyList: ["SF Pro", "Times New Roman", "Helvetica", "Courier"],
    fontSizeList: [20, 30, 40, 50, 60, 70, 80, 90, 100, 120],
    fontSize: "40",
    lineHeight: 1.4,
    bgModalOpen: false
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

  handleBgModal = (open) => () => {
    this.setState({ bgModalOpen: open});
  };

  sendLog = () => {
    const { text } = this.state;
    ReactGA.event({
      category: "DOWNLOAD",
      action: "Click",
      label: text
    });
  };

  render() {
    const {
      colorType,
      backgroundType,
      backgroundColor,
      backgroundImage,
      fontColor,
      text,
      href,
      fontSize,
      fontFamily,
      fontFamilyList,
      fontSizeList,
      lineHeight,
      width,
      height
    } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="content">
          <SizeForm
            width={width}
            height={height}
            onInputChange={this.handleInputChange}
          />
          <Preview
            backgroundType={backgroundType}
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            fontColor={fontColor}
            text={text}
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
          <Button
            type="primary"
            icon="file-image"
            onClick={this.handleBgModal(true)}
            style={{
              marginBottom: 10
            }}
          >
            Background Image
          </Button>
          <a href={href} download="banner-image.png">
            <Button
              type="primary"
              icon="download"
              size="large"
              onClick={() => this.sendLog()}>
              Download
            </Button>
          </a>
          <SideTab />
          <BgImageSelectModal
            open={this.state.bgModalOpen}
            onCancel={this.handleBgModal(false)}
          />
        </div>
      </div>
    );
  }
}

export default App;
