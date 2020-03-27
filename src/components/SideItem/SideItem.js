import React from 'react'
import { Icon } from 'antd'
import './SideItem.scss'

const SideItem = ({ menu, onClick, position, border }) => (
  <div className='sideItem'>
    <Icon
      type={menu.iconType}
      onClick={() => onClick(menu)}
      style={{ fontSize: '30px', color: '#eee' }}
    />
  </div>
)

export default SideItem
