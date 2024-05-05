import React, { ReactNode } from 'react'

interface MenuItemProps {
  label: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export default function MenuItem(props: MenuItemProps) {
  const { label, startIcon, endIcon } = props
  return (
    <div className='flex rounded-md py-[6px] px-4 gap-2 font-normal text-neutral-95 text-sm'>
      {startIcon}
      <span className='flex-1'>{label}</span>
      {endIcon}
    </div>
  )
}
