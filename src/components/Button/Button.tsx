import React, { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  size?: 'lg' | 'md' | 'sm',
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'neutral'
}

export function Button({ children, className, color = 'primary', size = 'sm', variant = 'contained', ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${size} btn-${color} btn-${variant} ${className}`} {...props}>{children}</button>
  )
}
