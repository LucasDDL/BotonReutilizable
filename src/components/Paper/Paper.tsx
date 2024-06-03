import { PropsWithChildren } from "react"

export type PaperProps = PropsWithChildren & {
  className?: string
  color?: 'primary' | 'secundary'
  variant?: 'default' | 'outlined'
}

export const Paper = (props: PaperProps) => {
  const { children, className, color = 'primary', variant = 'default' } = props
  return (
    <div className={`paper ${className}`}>
      {children}
    </div>
  )
}