import React from 'react'
import { Menu } from '../Menu'
import { Logo } from '@/icons/components/Logo'

export function Sidebar() {
  return (
    <aside className='bg-primary min-h-screen w-[224px] pt-[15px] pl-[14px] pr-[10px]'>
        <div className='text-[20px] leading-[22px] text-white flex gap-[10px] mb-[50px]'><Logo/>BMS Software</div>
        <Menu />
    </aside>
  )
}
