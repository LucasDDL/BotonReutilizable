import { Children, PropsWithChildren, ReactElement, cloneElement, isValidElement } from "react"
import { Button, ButtonProps } from "../Button/Button"

export type ButtonGroupProps = PropsWithChildren & {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'neutral'
  className?: string
  direction?: 'horizontal' | 'vertical'
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, variant = 'outlined', size, color, className, direction } = props

  return (
    <div className={`btn-group btn-group-${direction} ${className}`}>
      {Children.map(children, child => {
        if (!isValidElement(child)) {
          return null
        }

        // if (child.type !== Button) {
        //   throw new Error('ButtonGroup only accepts Button components as children')
        // }

        return cloneElement<ButtonProps>(child as ReactElement, { ...child.props, variant, size, color })
      })}
    </div>
  )
}