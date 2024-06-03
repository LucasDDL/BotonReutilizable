import { HTMLProps, PropsWithChildren } from "react"

export type PaperProps = PropsWithChildren & HTMLProps<HTMLDivElement> & {
  className?: string
  color?: 'primary' | 'secundary'
  variant?: 'default' | 'outlined'
}

export const Paper = (props: PaperProps) => {0
  const { children, className, color = 'primary', variant = 'default', ...divProps } = props
  return (
    <div className={`paper ${className}`} {...divProps}>
      {children}
    </div>
  )
}