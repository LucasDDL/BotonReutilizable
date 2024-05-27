import { PropsWithChildren, ReactNode } from "react"

export type ButtonGroupProps = PropsWithChildren & {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'neutral'
  className?: string
  direction?: 'horizontal' | 'vertical'
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, variant, size, color, className, direction } = props

  return (
    <div className={`btn-group btn-group-${direction} ${className}`}>
      {children}
    </div>
  )
}