import React from 'react'
import { Select } from 'antd'

interface TextBoxProps {
  text: string
  fontSize: string
  fontColor: string
  fontFamily: string
}

const TextBox: React.FC<TextBoxProps> = ({ text, fontSize, fontFamily }) => (
  <p className='title'>
    <span>{text}</span>
  </p>
)

export default TextBox
