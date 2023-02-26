import React, { createContext, useState } from 'react'
import { getRandomHexColor } from 'common/Utils.js'
import { PICKER_TYPE } from 'common/Constant'

const ContentsContext = createContext({
  state: {
    text: '',
    selectedText: '',
    pickerType: '',
    textColor: '',
    backgroundType: '',
    backgroundColor: '',
    backgroundImage: '',
    href: '',
    fontSize: '',
    fontFamily: '',
    width: 0,
    height: 0,
  },
  actions: {},
})

const ContentsProvider = ({ children }) => {
  const initColor = getRandomHexColor()

  const [width, setWidth] = useState(700)
  const [height, setHeight] = useState(350)
  const [text, setText] = useState('Sample Text')
  const [selectedText, setSelectedText] = useState('')
  const [fontSize, setFontSize] = useState('70')
  const [fontFamily, setFontFamily] = useState('SANJUGotgam')
  const [pickerType, setPickerType] = useState(PICKER_TYPE.BACKGROUND)
  const [href, setHref] = useState('')
  const [backgroundType, setBackgroundType] = useState('')
  const [textColor, setTextColor] = useState('#FFFFFF')
  const [backgroundColor, setBackgroundColor] = useState(initColor)
  const [backgroundImage, setBackgroundImage] = useState(null)
  const value = {
    state: {
      width,
      height,
      text,
      selectedText,
      pickerType,
      textColor,
      backgroundType,
      backgroundColor,
      backgroundImage,
      fontSize,
      fontFamily,
      href,
    },
    actions: {
      setWidth,
      setHeight,
      setText,
      setSelectedText,
      setTextColor,
      setBackgroundType,
      setPickerType,
      setBackgroundColor,
      setBackgroundImage,
      setFontSize,
      setFontFamily,
      setHref,
    },
  }

  return (
    <ContentsContext.Provider value={value}>
      {children}
    </ContentsContext.Provider>
  )
}

export { ContentsContext, ContentsProvider }
