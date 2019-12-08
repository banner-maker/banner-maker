import React, { useRef, useEffect } from 'react';
import { setCanvasFont, drawText, loadImage } from "./utils";
import './Preview.scss';

const Preview = (props) => {
  const canvasRef = useRef(null);
  const {
    width,
    height,
    color,
    fontSize,
    fontFamily,
    fontColor,
    lineHeight,
    backgroundColor,
    backgroundType,
    backgroundImage,
    text,
    updateCanvas
  } = props;

  useEffect(() => {
    const render = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (backgroundType === "color") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        const img = await loadImage(backgroundImage);
        ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
          0, 0, canvas.width, canvas.height); // destination rectangle
      }

      setCanvasFont(canvas, text, {
        color: fontColor,
        size: fontSize,
        font: fontFamily
      });

      drawText(canvas, text, fontSize, lineHeight);
      updateCanvas(canvas.toDataURL());
    };
    render();
  }, [
    width,
    height,
    color,
    fontSize,
    fontFamily,
    fontColor,
    lineHeight,
    backgroundColor,
    backgroundType,
    backgroundImage,
    text,
    updateCanvas
  ]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="previewCanvas"
        width={width}
        height={height}
      />
    </>
  );
};

export default Preview;
