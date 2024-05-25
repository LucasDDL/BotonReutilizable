import { PropsWithChildren, ReactNode } from "react"

export type ChipProps = PropsWithChildren & {
  variant?: 'outlined' | 'contained' | 'text'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'neutral'
  startIcon?: ReactNode
  endIcon?: ReactNode
  avatar?: ReactNode
  className?: string
}

export const Chip = (props: ChipProps) => {
  const { variant, size = 'sm', color = "primary", startIcon, endIcon, avatar, className, children } = props

  return (
    <div className={`chip chip-${size} chip-${variant} chip-${color} ${className}`}>
      {avatar && avatar}
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </div>
  )
} 