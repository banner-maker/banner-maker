import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

interface SizeFormProps {
  width: number
  height: number
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SizeForm: React.FC<SizeFormProps> = ({
  width,
  height,
  onInputChange,
}) => (
  <SizeFormWrapper>
    <Input
      addonBefore='width'
      className='SizeForm__input'
      name='width'
      value={width}
      onChange={onInputChange}
    />
    <Input
      addonBefore='height'
      className='SizeForm__input'
      name='height'
      value={height}
      onChange={onInputChange}
    />
  </SizeFormWrapper>
)

const SizeFormWrapper = styled.div`
  display: flex;
  & .SizeForm__input:first-child {
    margin-right: 5px;
  }
`

export default SizeForm
