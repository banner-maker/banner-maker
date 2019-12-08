import React, { Component } from "react";
import DownloadButton from "./components/Button/DownloadButton.jsx";
import "./styles/App.scss";
import "antd/dist/antd.css";
import SizeForm from "./components/SizeForm";
import Palette from "./components/Palette";
import Preview from "./components/Preview";
import Input from "./components/Input";
import Header from "./components/Header";
import Editor from "./components/Editor";
import { PICKER_TYPE } from "./common/Constant";
import SideTab from "./components/SideTab/SideTab";
import BgImageSelectModal from "./components/modal/BgImageSelectModal/BgImageSelectModal";
class App extends Component {
  constructor(props) {
    super(props);
    const initColor = this.getRandomColor();
    this.state = {
      color: {
        hex: initColor
      },
      pickerType: PICKER_TYPE.BACKGROUND,
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

  colorChange = data => {
    if (data.hsl !== this.state.color) {
      this.setState({ color: data });
    }
    this.setState({
      [`${this.state.pickerType}Color`]: data.hex,
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

  render() {
    const {
      colorType,
      fontColor,
      href,
      text,
      fontFamilyList,
      fontSizeList,
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
          <Preview {...this.state} updateCanvas={this.handleCanvasChange} />
          <Input color={fontColor} onChange={this.handleInputChange} />
          <Editor
            colorType={colorType}
            fontFamilyList={fontFamilyList}
            fontSizeList={fontSizeList}
            handleFontSize={this.handleFontSize}
            handleFontFamily={this.handleFontFamily}
            handleColorType={this.handleColorType}
          />
          <Palette color={this.state.color.hex} onChange={this.colorChange} />
          <DownloadButton href={href} text={text} />
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
