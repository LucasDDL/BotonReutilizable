import { PropsWithChildren, ReactNode } from "react"
import { ButtonGroup } from "../ButtonGroup"

export type ToggleButtonProps = PropsWithChildren & {

  size?: 'lg' | 'md' | 'sm'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'neutral'
  className?: string
  direction?: 'horizontal' | 'vertical'
  children: ReactNode
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { children, variant = 'contained', size = 'sm', color = 'primary', className, direction = 'horizontal' } = props


  return (
    <ButtonGroup variant={variant} size={size} color={color} className={className} direction={direction}>
      {children}
    </ButtonGroup>
  )
}