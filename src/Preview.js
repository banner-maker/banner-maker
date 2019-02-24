import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { color, text } = this.props;

    // set background color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // set text
    ctx.font = "40px Times New Roman";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }
  componentDidUpdate() {
    console.log("didupdate");
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { color, text } = this.props;

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  render() {
    return (
      <>
        <canvas
          ref={this.canvasRef}
          className="previewCanvas"
          width="700"
          height="350"
        />
      </>
    );
  }
}

export default Preview;
