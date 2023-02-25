import React, { useContext } from 'react'
import { ContentsContext } from 'contexts/contents'
import { Input } from 'antd'
import styled from 'styled-components'

interface SizeFormProps {
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SizeForm: React.FC<SizeFormProps> = ({}) => {
  const { state, actions } = useContext(ContentsContext)

  const handleInputChange = (e) => {
    if (e.target.name === 'width') {
      actions.setWidth(e.target.value)
    }
    if (e.target.name === 'height') {
      actions.setHeight(e.target.value)
    }
  }

  return (
    <SizeFormWrapper>
      <Input
        addonBefore='width'
        className='SizeForm__input'
        name='width'
        value={state.width}
        onChange={handleInputChange}
      />
      <Input
        addonBefore='height'
        className='SizeForm__input'
        name='height'
        value={state.height}
        onChange={handleInputChange}
      />
    </SizeFormWrapper>
  )
}

const SizeFormWrapper = styled.div`
  display: flex;
  width: 300px;
  padding: 15px;
  & .SizeForm__input:first-child {
    margin-right: 5px;
  }
`

export default SizeForm
