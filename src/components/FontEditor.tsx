import React, { useContext } from 'react'
import { ContentsContext } from '../contexts/contents'
import { Select } from 'antd'
const { Option } = Select

interface FontEditorProps {}

const FontEditor: React.FC<FontEditorProps> = () => {
  const { state, actions } = useContext(ContentsContext)
  const fontSizeList = [20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 180, 240]
  const fontFamilyList = [
    'Monaco',
    'Nanum Myeongjo',
    'Noto Sans KR',
    'Yeon Sung',
    'Do Hyeon',
    'Lobster',
    'Times New Roman',
    'Impact',
    'Helvetica',
    'Courier',
  ]

  const handleFontSize = (value) => {
    actions.setFontSize(value)
  }

  const handleFontFamily = (value) => {
    actions.setFontFamily(value)
  }

  return (
    <div className='editorWrapper'>
      <div className='editoritem'>
        <Select
          className='fontSelect'
          placeholder='font family'
          defaultValue={state.fontFamily}
          style={{ width: 150 }}
          onChange={handleFontFamily}>
          {fontFamilyList.map((family) => (
            <Option key={family} value={family}>
              {family}
            </Option>
          ))}
        </Select>
      </div>

      <div className='editoritem'>
        <Select
          style={{ width: 150 }}
          placeholder='font size'
          defaultValue={state.fontSize}
          optionFilterProp='children'
          onChange={handleFontSize}>
          {fontSizeList.map((size) => (
            <Option key={size} value={size}>
              {size}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  )
}

export default FontEditor
