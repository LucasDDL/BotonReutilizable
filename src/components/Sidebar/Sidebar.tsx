import React from 'react'
import { Menu } from '../Menu'
import { Logo } from '@/icons/components/Logo'
import { ModeToggle } from '../ModeToggle/ModeToggle'


export function Sidebar() {
  return (
    <aside className='bg-white border-r border-r-neutral min-h-screen w-[224px] pt-[15px] pl-[14px] pr-[10px] dark:bg-neutral-700 dark:border-r-neutral-50'>
      <div className='text-[20px] leading-[22px] text-neutral flex gap-[10px] mb-[50px] dark:text-neutral-50'>
        <Logo color="#e9eafb" fill="#0017a6" /> BMS Software
      </div>
      <ModeToggle />
      <Menu />
    </aside>
  )
}
