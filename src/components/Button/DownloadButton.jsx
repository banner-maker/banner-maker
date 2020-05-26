import React, { useContext } from 'react'
import { Button } from 'antd'
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
        icon='download'
        size='large'
        onClick={() => sendLog()}>
        Download
      </Button>
    </a>
  )
}

export default DownloadButton
