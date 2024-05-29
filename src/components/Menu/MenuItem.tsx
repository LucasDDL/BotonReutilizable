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
    <div className='relative cursor-pointer flex rounded-md py-[6px] px-4 gap-2  font-normal text-primary text-sm hover:bg-primary-50 active:bg-primary-100'>
      {startIcon}
      <span className='flex-1'>{label}</span>
      {endIcon}
      {
        active && <div className='absolute left-0 w-[3px] h-[22px] rounded-r bg-primary'></div>
      }
    </div>
  )
}
