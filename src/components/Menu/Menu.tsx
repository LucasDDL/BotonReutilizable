import React from 'react'
import { MenuItem } from './MenuItem'
import { Finance } from '@/icons/components/Finance'
import { Person } from '@/icons/components/Person'
import { SavingsOutline } from '@/icons/components/SavingsOutline'
import { CartOutline } from '@/icons/components/CartOutline'


export function Menu() {
  return (
    <div className='menu'>
      <MenuItem active={true} startIcon={<Finance className='size-[18px]' />} label="Inicio" />
      <MenuItem startIcon={<Person className='size-[18px]' />} label="Administradores" />
      <MenuItem startIcon={<SavingsOutline className='size-[18px]' />} label="Finanzas" />
      <MenuItem startIcon={<Person className='size-[18px]' />} label="Clientes" />
      <MenuItem startIcon={<CartOutline className='size-[18px]' />} label="Cajas" />
    </div>
  )
}
