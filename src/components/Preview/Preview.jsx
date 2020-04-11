import React, { useRef, useEffect } from 'react'
import { setCanvasFont, drawText, loadImage } from './utils.ts'
import './Preview.scss'

const Preview = ({
  width,
  height,
  fontSize,
  fontFamily,
  textColor,
  lineHeight,
  backgroundColor,
  backgroundType,
  backgroundImage,
  text,
  updateCanvas,
}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = async () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      if (backgroundType === 'color') {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        const img = await loadImage(backgroundImage)
        // prettier-ignore
        ctx.drawImage(img, 0, 0, img.width, img.height, // source rectangle
          0, 0, canvas.width, canvas.height) // destination rectangle
      }

      setCanvasFont(canvas, text, {
        color: textColor,
        size: fontSize,
        font: fontFamily,
      })

      drawText(canvas, text, fontSize, lineHeight)
      updateCanvas(canvas.toDataURL())
    }
    render()
  }, [
    width,
    height,
    fontSize,
    fontFamily,
    textColor,
    lineHeight,
    backgroundColor,
    backgroundType,
    backgroundImage,
    text,
    updateCanvas,
  ])

  return (
    <>
      <canvas
        ref={canvasRef}
        className='previewCanvas'
        width={width}
        height={height}
      />
    </>
  )
}

export default Preview
