import Image from "next/image"
import { PropsWithChildren } from "react"

export type AvatarProps = PropsWithChildren & {
  src?: string
  className?: string
  color?: 'primary' | 'neutral'
  size?: 'sm' | 'md' | 'lg'

}

export const Avatar = (props: AvatarProps) => {
  const { src, className, children, color = 'primary', size = 'sm' } = props

  const imageSizes = {
    'sm': 40,
    'md': 48,
    'lg': 56
  }

  let imageSize = imageSizes[size]

  return (
    <div className={`avatar avatar-${color} avatar-${size} ${className}`}>
      {src ? <img src={src} alt="avatar photo" /> : children}
    </div>
  )
}