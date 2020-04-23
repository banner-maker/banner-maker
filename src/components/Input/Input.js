import React from 'react'

const Input = ({ color, onChange }) => (
  <div className='inputWrapper'>
    <input
      className='textInput'
      onChange={onChange}
      name='text'
      style={{ color }}
      type='text'
      size='40'
      placeholder='Type text here :)'
    />
  </div>
)
export default Input
