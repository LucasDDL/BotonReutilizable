'use client'

import { Children, cloneElement, isValidElement, PropsWithChildren, ReactElement, ReactNode, useState } from "react"
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
  const { children, ...buttonGroupProps } = props

  const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveChildIndex(activeChildIndex === index ? null : index)
  }

  return (
    <ButtonGroup {...buttonGroupProps} className={`${buttonGroupProps.className || ''} toggle-button`} >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }
        const isActive = activeChildIndex === index

        return cloneElement(child as ReactElement, {
          ...child.props,
          onClick: () => handleClick(index),
          className: isActive ? `${child.props.className} toggle-btn-active` : child.props.className
        })
      })}
    </ButtonGroup >
  )
}