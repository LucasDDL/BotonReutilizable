import React, { ReactNode } from 'react'

interface MenuItemProps {
  label: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  active?: boolean
}

export function MenuItem(props: MenuItemProps) {
  const { label, startIcon, endIcon, active } = props
  return (
    <div className='menu-item'>
      {startIcon}
      <span>{label}</span>
      {endIcon}
      {
        active && <div className='menu-item-active'></div>
      }
    </div>
  )
}
