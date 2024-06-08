import { HTMLProps, PropsWithChildren } from "react"
import '../../app/css/paper.css'
import { cn } from "@/lib"

export type PaperProps = PropsWithChildren & HTMLProps<HTMLDivElement> & {
  className?: string
  color?: 'primary' | 'secundary'
  variant?: 'default' | 'outlined'
}

export const Paper = (props: PaperProps) => {

  const { children, className, color = 'primary', variant = 'default', ...divProps } = props
  return (
    <div className={cn("paper", className)} {...divProps}>
      {children}
    </div>
  )
}