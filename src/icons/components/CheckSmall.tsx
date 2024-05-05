import { SVGProps } from "react"

export const CheckSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="currentColor" 
    d="m10 16.4-4-4L7.4 11l2.6 2.6L16.6 7 18 8.4l-8 8Z" />
  </svg>
)