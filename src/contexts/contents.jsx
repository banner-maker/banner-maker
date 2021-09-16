import React, { createContext, useState } from 'react'

const ContentsContext = createContext({
  state: {
    text: '',
    fontSize: '',
    fontFamily: '',
  },
  actions: {
    setText: () => {},
    setFontSize: (fontSize) => {},
    setFontFamily: (fontFamily) => {},
  },
})

const ContentsProvider = ({ children }) => {
  const [text, setText] = useState('Sample Text')
  const [fontSize, setFontSize] = useState('50')
  const [fontFamily, setFontFamily] = useState('Helvetica')

  const value = {
    state: { text, fontSize, fontFamily },
    actions: { setText, setFontSize, setFontFamily },
  }

  return (
    <ContentsContext.Provider value={value}>
      {children}
    </ContentsContext.Provider>
  )
}

export { ContentsContext, ContentsProvider }
