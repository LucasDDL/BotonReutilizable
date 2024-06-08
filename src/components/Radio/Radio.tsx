import { RadioChecked, RadioUnchecked } from "@/icons/components"
import { cn } from "@/lib"
import { ReactNode, useState } from "react"

export type RadioProps = {
  label: string
  color?: 'primary' | 'neutral'
  size?: 'lg' | 'md' | 'sm'
  checkedIcon?: ReactNode
  uncheckedIcon?: ReactNode
  labelPlacement?: 'start' | 'top' | 'end' | 'bottom'
}

export const Radio = (props: RadioProps) => {
  const {
    label,
    color = 'primary',
    size = 'md',
    checkedIcon = <RadioChecked />,
    uncheckedIcon = <RadioUnchecked />,
    labelPlacement = 'end'
  } = props

  const [checked, setChecked] = useState(false)

  return (
    <div className={cn("radio", `radio-${color}`, `radio-${size}`, `radio-${labelPlacement}`)} onClick={() => setChecked(prev => !prev)}>
      {checked ? checkedIcon : uncheckedIcon}
      {label}
    </div>
  )
}