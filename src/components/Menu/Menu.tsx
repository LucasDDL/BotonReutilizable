import React from 'react'
import MenuItem from './MenuItem'
import { Person } from '@/icons/components/Person'
import { ArrowDown } from '@/icons/components'

export default function Menu() {
  return (
    <div className='flex flex-col gap-[10px]'>
        <MenuItem startIcon={<Person />} endIcon={<ArrowDown />} label="Inicio"/>
        <MenuItem label="Administradores"/>
        <MenuItem label="Finanzas"/>
        <MenuItem label="Clientes"/>
        <MenuItem label="Cajas"/>
    </div>
  )
}
