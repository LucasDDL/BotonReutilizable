import React, { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  size?: 'lg' | 'md' | 'sm',
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'neutral'
}

export function Button({ children, color = 'primary', size = 'sm', variant = 'contained', ...props }: ButtonProps) {
  return (
    <div>
      <button className={`btn btn-${size} btn-${color} btn-${variant}`} {...props}>{children}</button>
    </div>
  )
}
