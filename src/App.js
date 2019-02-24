import React, { Component } from "react";
import "./App.css";
import Palette from "./Palette";
import Preview from "./Preview";

class App extends Component {
  state = {
    color: "#ccc",
    text: "",
    href: "",
    download: ""
  };

  handleChange = color => {
    this.setState({ color: color.hex });
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  clickDownload = e => {
    // var href = mainCanvas.toDataURL();
    // this.href = href;
    // this.download = "npjy.png";
  };

  render() {
    const { color, text, href, download } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Preview color={color} text={text} />
          <input
            className="textInput"
            onChange={this.handleTextChange}
            type="text"
            size="50"
            placeholder="type text here"
          />
          <Palette color={color} onChange={this.handleChange} />
          <button
            className="downbutton"
            href={href}
            download={download}
            onClick={this.clickDownload}
          >
            Download (PNG)
          </button>
        </header>
      </div>
    );
  }
}

export default App;
