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
    this.setFont(canvas, text, {
      color: "white",
      size: "40",
      font: "Arial"
    });
  }
  componentDidUpdate() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { color, text } = this.props;

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.setFont(canvas, text, {
      color: "white",
      size: "40",
      font: "Arial"
    });

    const url = canvas.toDataURL();
    console.log(url);
  }

  setFont = (canvas, text, args) => {
    const ctx = canvas.getContext("2d");
    const { color, size, font } = args;
    ctx.font = `${size}px ${font}`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  };

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
