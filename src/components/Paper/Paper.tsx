import { HTMLProps, PropsWithChildren } from "react"
<<<<<<< HEAD
=======
import '../../app/css/paper.css'
import { cn } from "@/lib"
>>>>>>> bd27a0bc5fbba5751a60830abaed5dd88ab5b486

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