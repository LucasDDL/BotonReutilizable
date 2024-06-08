import { Children, isValidElement, PropsWithChildren } from "react";
import { Radio } from "../Radio/Radio";
import { cn } from "@/lib";


export type RadioGroupProps = PropsWithChildren & {
  direction?: 'horizontal' | 'vertical'
  color?: 'primary' | 'neutral'
  size?: 'lg' | 'md' | 'sm'
  className?: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { direction = 'horizontal', color = 'primary', size = 'md', children, className } = props

  return (
    <div className={cn("radio-group", `radio-group-${direction}`, className)}>
      {Children.map(children, child => {
        if (!isValidElement(child)) {
          return null
        }

        return <Radio {...child.props} color={color} size={size} />
      })}
    </div>
  )
}