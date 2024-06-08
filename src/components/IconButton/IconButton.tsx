import { cn } from "@/lib"
import { PropsWithChildren, ReactNode } from "react"

export type IconButtonProps = PropsWithChildren & {
  color?: 'primary' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

export const IconButton = (props: IconButtonProps) => {
  const { color = 'primary', size = 'sm', children, className } = props
  return (
    <div className={cn("btn", "icon-btn", `btn-${color}`, `icon-btn-${size}`, className)}>
      {children}
    </div>
  )
}