import React, { FC } from 'react'

interface Props {
  menu: string
}

const SidePane: FC<Props> = ({ menu }) => (
  <div className='sidePane'>
    <h1>🏗</h1>
    <p>{menu}</p>
  </div>
)

export default SidePane
