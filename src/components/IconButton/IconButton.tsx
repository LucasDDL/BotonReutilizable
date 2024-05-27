import { PropsWithChildren, ReactNode } from "react"

export type IconButtonProps = PropsWithChildren & {
  color?: 'primary' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

export const IconButton = (props: IconButtonProps) => {
  const { color = 'primary', size = 'sm', children } = props
  return (
    <div className={`btn icon-btn btn-${color} icon-btn-${size}`}>
      {children}
    </div>
  )
}