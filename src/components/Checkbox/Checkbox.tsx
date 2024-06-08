'use client'

import { CheckboxOutline } from "@/icons/components/CheckboxOutline"
import { CheckboxOutlineBlank } from "@/icons/components/CheckboxOutlineBlank"
import { cn } from "@/lib"
import { HtmlHTMLAttributes, ReactNode, useState } from "react"

export type CheckboxProps = HtmlHTMLAttributes<HTMLInputElement> & {
  label: string
  color?: 'primary' | 'neutral'
  size?: 'lg' | 'md' | 'sm'
  checkedIcon?: ReactNode
  uncheckedIcon?: ReactNode
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    label,
    color = 'primary',
    size = 'sm',
    className,
    checkedIcon = <CheckboxOutline />,
    uncheckedIcon = <CheckboxOutlineBlank />,
  } = props

  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    setChecked(prev => !prev)
  }

  return (
    <div className={cn("checkbox", `checkbox-${color}`, `checkbox-${size}`, className)} onClick={handleClick}>
      {checked ? checkedIcon : uncheckedIcon}
      <div>
        {label}
      </div>
    </div>
  )
}