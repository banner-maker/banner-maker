import React, { useContext, useState, useCallback } from 'react'
import PickerIcon from './PickerIcon.jsx'
import { PICKER_TYPE } from 'common/Constant'
import { PictureOutlined } from '@ant-design/icons'
import { ContentsContext } from 'contexts/contents.jsx'
import { getRandomImageDataUrl } from 'common/Utils.js'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const NewPalette = ({}) => {
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

  const { state, actions } = useContext(ContentsContext)
  const { width, height } = state
  const [loading, setLoading] = useState(false)

  const handleBackgroundColor = ({ hex, pickerType }) => {
    if (pickerType === PICKER_TYPE.BACKGROUND) {
      actions.setBackgroundImage(null)
      actions.setBackgroundColor(hex)
    } else {
      actions.setBackgroundImage(getRandomImageDataUrl(width, height))
    }
  }

  const handleBackgroundImage = useCallback(async () => {
    setLoading(true)
    getRandomImageDataUrl(width, height)
      .then((imgUrl) => {
        actions.setBackgroundImage(imgUrl)
        actions.setPickerType(PICKER_TYPE.IMAGE)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [actions, height, width])

  return (
    <div
      className='paletteWrapper'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '5px',
      }}>
      <PickerIcon
        pickerType={PICKER_TYPE.BACKGROUND}
        hexColor={state.backgroundColor}
        pickerHandler={handleBackgroundColor}
      />
      <PickerIcon
        pickerType={PICKER_TYPE.TEXT}
        hexColor={state.textColor}
        pickerHandler={({ hex }) => actions.setTextColor(hex)}
      />
      <div
        className='colorRect'
        style={colorRect}
        onClick={handleBackgroundImage}>
        {loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : (
          <PictureOutlined style={{ fontSize: '1.6em', color: 'white' }} />
        )}
      </div>
    </div>
  )
}

export default NewPalette
