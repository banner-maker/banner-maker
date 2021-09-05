import React from 'react'
import Icon from '@ant-design/icons'
import './SideItem.scss'

const SideItem = ({ menu, onClick }) => (
  <div className='sideItem'>
    <Icon
      type={menu.iconType}
      onClick={() => onClick(menu)}
      style={{ fontSize: '30px', color: '#eee' }}
    />
  </div>
)

export default SideItem
