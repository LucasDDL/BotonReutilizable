import React from 'react'
import Menu from './Menu/Menu'

export default function Sidebar() {
  return (
    <aside className='bg-primary-50 min-h-screen w-[224px] pt[15px] pl-[14px] pr-[10px]'>
        <div >BMS Software</div>
        <Menu />
    </aside>
  )
}
