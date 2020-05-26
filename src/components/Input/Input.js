import React, { useContext } from 'react'
import { ContentsContext } from '../../contexts/contents'

const Input = ({ color }) => {
  const { actions } = useContext(ContentsContext)

  const handleChange = (e) => {
    actions.setText(e.target.value)
  }
  return (
    <div className='inputWrapper'>
      <input
        className='textInput'
        onChange={(e) => handleChange(e)}
        name='text'
        style={{ color }}
        type='text'
        size='40'
        placeholder='Type text here :)'
      />
    </div>
  )
}
export default Input
