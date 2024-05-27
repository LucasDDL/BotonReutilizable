import { SVGProps } from "react"

export const CreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 20c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 4 4h16c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 20 20H4Zm0-8h16V8H4v4Z"
    />
  </svg>
)