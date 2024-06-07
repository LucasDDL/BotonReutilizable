import { cn } from "@/lib"
import { PropsWithChildren, ReactNode } from "react"

export type AppBarProps = PropsWithChildren & {
  children: ReactNode
  className?: string
  color?: 'primary' | 'neutral'
}

export const AppBar = (props: AppBarProps) => {
  const { children, className, color = 'primary' } = props
  return (
    <div className={cn("app-bar", `app-bar-${color}`, className)}>
      {children}
    </div>
  )
}