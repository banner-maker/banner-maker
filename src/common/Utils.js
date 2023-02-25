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

export const getRandomImageUrl = (width, height) =>
  fetch(
    `https://picsum.photos/seed/${getRandomNumber(1084)}/${width}/${height}`,
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.url
  })
