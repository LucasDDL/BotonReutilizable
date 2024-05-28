'use client'
import { PropsWithChildren, ReactNode, Children, isValidElement, cloneElement, ReactElement, useState } from "react"

export type TabsProps = PropsWithChildren & {
  children?: ReactNode
  className?: string
}

export const Tabs = (props: TabsProps) => {
  const { children, className } = props
  const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveChildIndex(activeChildIndex === index ? null : index)
  }
  return (
    <div className={`tabs ${className}`}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }
        const isActive = activeChildIndex === index
        return cloneElement(child as ReactElement, {
          ...child.props,
          onClick: () => handleClick(index),
          className: isActive ? `${child.props.className} tab-active` : child.props.className
        })
      })}
    </div>
  )
}