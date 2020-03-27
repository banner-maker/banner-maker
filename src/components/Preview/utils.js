export const setCanvasFont = (canvas, text, params) => {
  const ctx = canvas.getContext('2d')
  const { color, size, font } = params
  ctx.font = `${size}px ${font}`
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
}

export const drawText = (canvas, text, fontSize, lineHeight) => {
  const ctx = canvas.getContext('2d')
  const defaultWidth = canvas.width / 2
  const defaultHeight = canvas.height / 2
  const fontHeight = fontSize * lineHeight
  const SEPARATOR = '\\n'
  const lines = text.split(SEPARATOR)

  if (lines.length % 2) {
    lines.map((line, index) => {
      const middle = parseInt(lines.length / 2)
      const h = defaultHeight + (index - middle) * fontHeight
      ctx.fillText(line, defaultWidth, h)
      return null
    })
  } else {
    const mid = (lines.length - 1) / 2
    const offsets = lines
      .map((line, index) => index)
      .reduce((prev, curr) => {
        const subtract = curr - mid
        prev.push([subtract < 0, parseInt(subtract)])
        return prev
      }, [])
    offsets.map(([sign, offset], index) => {
      const position = offset * fontHeight
      const e = sign ? (fontHeight / 2) * -1 : fontHeight / 2
      const h = defaultHeight + position + e
      ctx.fillText(lines[index], defaultWidth, h)
      return null
    })
  }
}

export const loadImage = (blob) =>
  new Promise((resolve) => {
    const img = new Image()
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onloadend = () => {
      console.log(reader.result)
      img.src = reader.result
      img.crossOrigin = 'Anonymous'
      img.onload = () => resolve(img)
    }
  })
