import React, { useContext, useState } from 'react'
import './EditorViewer.scss'
import html2canvas from 'html2canvas'
import { ContentsContext } from 'contexts/contents'
import TextBox from './TextBox'
import HtmlDownloadButton from 'components/Button/HtmlDownloadButton'

interface EditorViewerProps {
  width: number
  height: number
}

const EditorViewer: React.FC<EditorViewerProps> = ({}) => {
  const {
    width,
    height,
    text,
    selectedText,
    fontSize,
    fontFamily,
    textColor,
    backgroundColor,
    backgroundImage,
  } = useContext(ContentsContext).state

  const { state, actions } = useContext(ContentsContext)

  const [contents, setContents] = useState('')

  const onCapture = () => {
    html2canvas(document.getElementById('editor'), {
      width: width,
      height: height,
      scale: 1,
    })
      .then((canvas) => {
        const link = document.createElement('a')
        link.download = `${text}.png`
        link.href = canvas.toDataURL('image/png')
        console.log('link:', link)
        link.click()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // TODO: selection 영역 구하기
  // const handleMouseUp = (e) => {
  // var selection = window.getSelection()
  // var range = selection.getRangeAt(0)
  // var selectedContent = range.cloneContents()
  // var div = document.createElement('div')
  // actions.setSelectedText(selectedContent)
  // console.log('textconent:', sel.focusNode.textContent)
  // console.log('focusNode:', sel.focusNode)
  // sel.getRangeAt(0).insertNode()
  // var range = sel.getRangeAt(0).cloneRange()
  // var markerTextChar = range.extractContents()
  // console.log(`sel info: ${sel}, ${range}, ${markerTextChar}`)
  // }

  var textList = ['Sample Text']

  const textBoxList = textList.map((it, idx) => (
    <TextBox
      key={idx}
      text={it}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontColor={textColor}
    />
  ))

  return (
    <div className='wrapper'>
      <div
        id='editor'
        className='editor'
        contentEditable='true'
        // onInput={onContentsChange}
        // onKeyDown={handleKeydown}
        suppressContentEditableWarning={true}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundImage ? '' : backgroundColor,
          backgroundImage: `url(${backgroundImage})`,
          color: textColor,
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
        }}>
        {textBoxList}
      </div>
      <HtmlDownloadButton onClick={() => onCapture()} />
    </div>
  )
}

export default EditorViewer
