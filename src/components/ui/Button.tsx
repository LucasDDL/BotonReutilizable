import React, { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  size: 'lg' | 'md' | 'sm',
  variant: 'contained' | 'outlined' | 'text'
}

export function Button({ children, color, size, variant, ...props }: ButtonProps) {

  const sizeClasses = {
    lg: 'btn-lg',
    md: '',
    sm: '',
  }

  const viariantClasses = {
    contained: `bg-[${color}]- text-white`,
    outlined: `border border-[${color}] text-[${color}]`,
    text: `text-[${color}]`,
  }

  const classes = `${sizeClasses[size]} ${viariantClasses[variant]}`

  return (
    <div>
      <button className={classes} {...props}>{children}</button>
    </div>
  )
}
