import React, { useRef, useEffect, useContext } from 'react'
import { setCanvasFont, drawText, loadImage } from './utils.ts'
import { ContentsContext } from '../../contexts/contents'
import './Preview.scss'

const Preview = ({
  width,
  height,
  textColor,
  backgroundColor,
  backgroundType,
  backgroundImage,
  updateCanvas,
}) => {
  const canvasRef = useRef(null)
  const { text, fontSize, fontFamily } = useContext(ContentsContext).state

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

      setCanvasFont(canvas, {
        color: textColor,
        size: fontSize,
        family: fontFamily,
      })

      drawText(canvas, text, fontSize)
      updateCanvas(canvas.toDataURL())
    }
    render()
  }, [
    width,
    height,
    fontSize,
    fontFamily,
    textColor,
    backgroundColor,
    backgroundType,
    backgroundImage,
    updateCanvas,
    text,
  ])

  return (
    <canvas
      ref={canvasRef}
      className='previewCanvas'
      width={width}
      height={height}
    />
  )
}

export default Preview
