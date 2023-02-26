export const getContrastYIQ = (color) => {
  const r = parseInt(color.substr(0, 2), 16)
  const g = parseInt(color.substr(2, 2), 16)
  const b = parseInt(color.substr(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 220 ? '#000000' : '#ffffff'
}

// eslint-disable-next-line
export const getRandomHexColor = () =>
  `#${`0${(~~(Math.random() * 16777215)).toString(16)}`.slice(-6)}`

export const getRandomNumber = (range) => Math.floor(Math.random() * range)

export const getRandomImageDataUrl = (width, height) =>
  fetch(
    `https://picsum.photos/seed/${getRandomNumber(1084)}/${width}/${height}`,
  )
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onloadend = () => {
            resolve(reader.result)
          }
        }),
    )
    .catch((error) => {
      console.error(error)
      throw error
    })
