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
    <div className='flex rounded-md py-[6px] px-4 gap-2  font-normal text-neutral-95 text-sm hover:bg-primary-40 relative'>
      {startIcon}
      <span className='flex-1 '>{label}</span>
      {endIcon}
      {
        active && <div className='absolute left-0 w-[3px] h-[22px] rounded-r bg-primary-95'></div>
      }
    </div>
  )
}
