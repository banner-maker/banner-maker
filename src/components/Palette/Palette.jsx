import React from 'react'
import PickerIcon from './PickerIcon.jsx'
import { PICKER_TYPE } from 'common/Constant'
import { PictureOutlined } from '@ant-design/icons'
const Palette = ({ textColor, backgroundColor, onChange, handleImage }) => {
  const paletteWrapper = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5px',
  }
  const colorRect = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    border: '1px solid #fff',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '5px',
  }

  return (
    <div className='paletteWrapper' style={paletteWrapper}>
      <PickerIcon
        pickerType={PICKER_TYPE.BACKGROUND}
        hexColor={backgroundColor}
        iconName='bg-colors'
        pickerHandler={onChange}
      />
      <PickerIcon
        pickerType={PICKER_TYPE.TEXT}
        hexColor={textColor}
        iconName='font-colors'
        pickerHandler={onChange}
      />
      <div className='colorRect' style={colorRect} onClick={handleImage}>
        <PictureOutlined style={{ fontSize: '1.6em', color: 'white' }} />
      </div>
    </div>
  )
}

export default Palette
