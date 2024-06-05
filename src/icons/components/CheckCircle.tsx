import { SVGProps } from "react"

export const CheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.6 13.8-2.15-2.15a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275.948.948 0 0 0-.275.7c0 .283.092.517.275.7L9.9 15.9c.2.2.433.3.7.3.267 0 .5-.1.7-.3l5.65-5.65a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L10.6 13.8ZM12 22a9.733 9.733 0 0 1-3.9-.788 10.114 10.114 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.76 9.76 0 0 1 2 12c0-1.383.262-2.683.788-3.9a10.121 10.121 0 0 1 2.137-3.175c.899-.9 1.957-1.612 3.175-2.137A9.742 9.742 0 0 1 12 2c1.382 0 2.682.263 3.9.788a10.084 10.084 0 0 1 3.175 2.137c.899.9 1.611 1.958 2.138 3.175A9.679 9.679 0 0 1 22 12a9.806 9.806 0 0 1-.788 3.9 10.032 10.032 0 0 1-2.137 3.175 10.16 10.16 0 0 1-3.175 2.138A9.689 9.689 0 0 1 12 22Z"
    />
  </svg>
)