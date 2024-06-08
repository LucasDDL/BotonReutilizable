import React from 'react'
import { Menu } from '../Menu'
import { Logo } from '@/icons/components/Logo'

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='logo'>
        <Logo color="#e9eafb" fill="#0017a6" /> BMS Software
      </div>
      <Menu />
    </aside >
  )
}
