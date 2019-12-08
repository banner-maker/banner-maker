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
  constructor(props) {
    super(props);
    const initColor = this.getRandomColor();
    this.state = {
      color: {
        hex: initColor
      },
      colorType: COLOR_TYPE.BACKGROUND,
      width: "700",
      height: "350",
      backgroundType: "color",
      backgroundImage: null,
      backgroundColor: initColor,
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
  }

  handleChange = data => {
    if (data.hsl !== this.state.color) {
      this.setState({ color: data });
    }
    const { colorType } = this.state;
    this.setState({
      [`${colorType}Color`]: data.hex,
      backgroundType: "color"
    });
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
    return "#" + `0${(~~(Math.random() * 16777215)).toString(16)}`.slice(-6);
  };

  handleCanvasChange = href => {
    this.setState({ href });
  };

  handleBgModal = open => () => {
    this.setState({ bgModalOpen: open });
  };

  setBackgroundImage = blob => {
    this.setState({
      backgroundType: "image",
      backgroundImage: blob,
      bgModalOpen: false
    });
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
      color,
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
            color={this.state.color}
            // color={this.state[`${colorType}Color`]}
            onChange={this.handleChange}
          />
          {/* <Button
            type="primary"
            icon="file-image"
            onClick={this.handleBgModal(true)}
            style={{
              marginBottom: 10
            }}>
            Background Image
          </Button> */}
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
            close={this.handleBgModal(false)}
            setImage={this.setBackgroundImage}
          />
        </div>
      </div>
    );
  }
}

export default App;
