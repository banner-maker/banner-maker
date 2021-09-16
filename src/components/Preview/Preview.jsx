import React, { useRef, useEffect, useContext } from 'react'
import { setCanvasFont, drawText } from './utils.ts'
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

      if (backgroundType === 'color' && backgroundImage === null) {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        setCanvasFont(canvas, {
          color: textColor,
          size: fontSize,
          family: fontFamily,
        })
        drawText(canvas, text, fontSize)
        updateCanvas(canvas.toDataURL())
      } else {
        const img = new Image()
        img.src = backgroundImage
        img.crossOrigin = 'Anonymous'
        img.onload = () => {
          // prettier-ignore
          ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
          ctx.filter = 'blur'
          setCanvasFont(canvas, {
            color: textColor,
            size: fontSize,
            family: fontFamily,
          })
          drawText(canvas, text, fontSize)
          updateCanvas(canvas.toDataURL())
        }
      }
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
