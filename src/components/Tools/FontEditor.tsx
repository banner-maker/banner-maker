import React, { useContext } from 'react'
import { ContentsContext } from '../../contexts/contents'
import { Select } from 'antd'
import PickerIcon from './PickerIcon.jsx'
import { PICKER_TYPE } from 'common/Constant'
import './Tools.scss'

const { Option } = Select

interface FontEditorProps {}

const FontEditor: React.FC<FontEditorProps> = () => {
  const { state, actions } = useContext(ContentsContext)
  const fontSizeList = [20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 180, 240]
  const fontFamilyList = [
    'SANJUGotgam',
    'Song Myung',
    'Gowun Dodum',
    'Nanum Gothic Coding',
    'Nanum Pen Script',
    'Noto Serif KR',
    'Nanum Myeongjo',
    'Noto Sans KR',
    'Yeon Sung',
    'Do Hyeon',
    'Monaco',
    'Lobster',
    'Times New Roman',
    'Impact',
    'Helvetica',
    'Courier',
  ]

  const handleFontSize = (value: string) => {
    actions.setFontSize(value)
  }

  const handleFontFamily = (value: string) => {
    actions.setFontFamily(value)
  }

  return (
    <div className='editorWrapper'>
      <PickerIcon
        pickerType={PICKER_TYPE.TEXT}
        hexColor={state.textColor}
        pickerHandler={({ hex }) => actions.setTextColor(hex)}
      />

      <div className='editoritem'>
        <Select
          className='fontSelect'
          placeholder='font family'
          defaultValue={state.fontFamily}
          style={{
            width: 180,
            fontFamily: state.fontFamily,
            textAlign: 'left',
          }}
          onChange={handleFontFamily}>
          {fontFamilyList.map((family) => (
            <Option style={{ fontFamily: family }} key={family} value={family}>
              {family}
            </Option>
          ))}
        </Select>
      </div>

      <div className='editoritem'>
        <Select
          style={{ width: 80 }}
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
