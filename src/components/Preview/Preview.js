import React, { Component } from "react";
import "./Preview.scss";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const {
      backgroundColor,
      fontColor,
      text,
      fontSize,
      fontFamily,
      lineHeight,
      updateCanvas,
      href
    } = this.props;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.setFont(canvas, text, {
      color: fontColor,
      size: fontSize,
      font: fontFamily
    });

    this.drawText(canvas, text, fontSize, lineHeight);

    const url = canvas.toDataURL();
    href !== url && updateCanvas(url);
  }

  setFont = (canvas, text, args) => {
    const ctx = canvas.getContext("2d");
    const { color, size, font } = args;
    ctx.font = `${size}px ${font}`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  };

  drawText = (canvas, text, fontSize, lineHeight) => {
    const ctx = canvas.getContext('2d');
    const defaultWidth = canvas.width / 2;
    const defaultHeight = canvas.height / 2;
    const fontHeight = (fontSize * lineHeight);
    const SEPARATOR = '\\n';
    const lines = text.split(SEPARATOR);

    if (lines.length % 2) {
      lines.map((line, index) => {
        const middle = parseInt(lines.length / 2);
        const h = defaultHeight + ((index - middle) * fontHeight);
        ctx.fillText(line, defaultWidth, h);
        return null;
      });
    } else {
      const mid = (lines.length - 1) / 2;
      const offsets = lines.map((line, index) => index).reduce((prev, curr) => {
        const subtract = curr - mid;
        prev.push([subtract < 0, parseInt(subtract)]);
        return prev
      }, []);
      offsets.map(([sign, offset], index) => {
        const position = (offset * fontHeight);
        const e = sign ? fontHeight / 2 * -1 : fontHeight / 2;
        const h = defaultHeight + position + e;
        ctx.fillText(lines[index], defaultWidth, h);
        return null;
      })
    }
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
