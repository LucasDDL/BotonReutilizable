import React, { HtmlHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  size?: 'lg' | 'md' | 'sm',
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'neutral'
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export function Button({ children, className, startIcon, endIcon, color = 'primary', size = 'sm', variant = 'contained', ...props }: ButtonProps) {
  return (
      <button className={`btn btn-${size} btn-${color} btn-${variant} ${className}`} {...props}>
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </button>
  )
}
