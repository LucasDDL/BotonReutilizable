import { cn } from '@/lib'
import React, { HtmlHTMLAttributes, ReactNode, forwardRef } from 'react'

export type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  size?: 'lg' | 'md' | 'sm',
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'neutral'
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, startIcon, endIcon, color = 'primary', size = 'sm', variant = 'contained', ...buttonProps } = props
  return (
    <button ref={ref} className={cn('btn', `btn-${size}`, `btn-${color}`, `btn-${variant}`, className)} {...buttonProps}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  )
})
Button.displayName = 'Button'
