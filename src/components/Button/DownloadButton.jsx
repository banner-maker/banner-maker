import React, { useContext } from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

import ReactGA from 'react-ga'
import { ContentsContext } from '../../contexts/contents'

ReactGA.initialize('UA-80202920-2')

const DownloadButton = ({ href }) => {
  const { text } = useContext(ContentsContext).state
  const sendLog = () => {
    ReactGA.event({
      category: 'DOWNLOAD',
      action: 'Click',
      label: text,
    })
  }
  return (
    <a href={href} download={`${text.split(' ').join('_')}.png`}>
      <Button
        type='primary'
        shape='round'
        icon={<DownloadOutlined />}
        onClick={() => sendLog()}
        size='large'>
        Download
      </Button>
    </a>
  )
}

export default DownloadButton
