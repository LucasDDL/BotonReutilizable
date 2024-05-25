'use client'

import { CheckboxOutline } from "@/icons/components/CheckboxOutline"
import { CheckboxOutlineBlank } from "@/icons/components/CheckboxOutlineBlank"
import { HtmlHTMLAttributes, ReactNode, useState } from "react"

export type CheckboxProps = HtmlHTMLAttributes<HTMLInputElement> & {
  label: string
  color?: 'primary' | 'neutral'
  size?: 'lg' | 'md' | 'sm'
  checkedIcon?: ReactNode
  uncheckedIcon?: ReactNode

}

let iconSize: number

export const Checkbox = (props: CheckboxProps) => {
  const { label, color = 'primary', size = 'sm', className, checkedIcon = <CheckboxOutline width={iconSize} height={iconSize} />, uncheckedIcon = <CheckboxOutlineBlank width={iconSize} height={iconSize} />
  } = props
  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    setChecked(!checked)
  }

  const iconSizes = {
    'sm': 24,
    'md': 28,
    'lg': 31
  }

  iconSize = iconSizes[size]

  return (
    <div className={`checkbox checkbox-${color} checkbox-${size}`} onClick={handleClick}>
      <div className="checkbox-icon">
        {checked ? checkedIcon : uncheckedIcon}
      </div>
      <div>
        {label}
      </div>
    </div>
  )
}