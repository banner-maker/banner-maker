import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

interface DownloadButtonProps {
  onClick: () => void
}

const HtmlDownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => (
  <Button
    type='primary'
    shape='round'
    icon={<DownloadOutlined />}
    onClick={() => onClick()}
    size='large'>
    Download
  </Button>
)

export default HtmlDownloadButton
