import React, { ReactNode } from 'react'

interface MenuItemProps {
    label: ReactNode
}

export default function MenuItem({label}: MenuItemProps) {
  return (
    <div className='flex rounded-md py-[6px] px-4 gap-2 font-normal text-neutral-95 text-sm'>
        {label}
    </div>
  )
}
