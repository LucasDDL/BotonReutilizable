import React from 'react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <div className='flex flex-col gap-[10px]'>
        <MenuItem label="Inicio"/>
        <MenuItem label="Administradores"/>
        <MenuItem label="Finanzas"/>
        <MenuItem label="Clientes"/>
        <MenuItem label="Cajas"/>
    </div>
  )
}
