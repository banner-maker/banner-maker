import React, { useContext, useState, useCallback } from 'react'
import PickerIcon from './PickerIcon.jsx'
import { PICKER_TYPE } from 'common/Constant'
import { PictureOutlined } from '@ant-design/icons'
import { ContentsContext } from 'contexts/contents.jsx'
import { getRandomImageDataUrl } from 'common/Utils.js'
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons'
import { Spin, Upload } from 'antd'
import './Tools.scss'

const BGEditor: React.FC = () => {
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

  const onUploadChange = (info) => {
    const file = info.file.originFileObj
    const reader = new FileReader()

    reader.onload = () => {
      actions.setBackgroundImage(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className='editorWrapper'>
      <PickerIcon
        pickerType={PICKER_TYPE.BACKGROUND}
        hexColor={state.backgroundColor}
        pickerHandler={handleBackgroundColor}
      />
      <div className='colorRect' onClick={handleBackgroundImage}>
        {loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : (
          <PictureOutlined />
        )}
      </div>
      <div className='colorRect'>
        <Upload
          onChange={onUploadChange}
          showUploadList={false}
          accept='image/png, image/jpeg, image/gif'>
          <UploadOutlined style={{ fontSize: '1.4em', color: 'white' }} />
        </Upload>
      </div>
    </div>
  )
}

export default BGEditor
