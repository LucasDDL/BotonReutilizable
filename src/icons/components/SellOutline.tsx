import { SVGProps } from "react"

export const SellOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m21.4 14.25-7.15 7.15c-.2.2-.425.35-.675.45-.25.1-.5.15-.75.15s-.5-.05-.75-.15c-.25-.1-.475-.25-.675-.45l-8.825-8.825a1.974 1.974 0 0 1-.575-1.4V4c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 4 2h7.175c.267 0 .525.054.775.163.25.109.467.254.65.437l8.8 8.825c.2.2.346.425.438.675a2.105 2.105 0 0 1 0 1.488c-.09.242-.237.463-.438.662ZM12.825 20l7.15-7.15L11.15 4H4v7.15L12.825 20ZM6.5 8c.417 0 .771-.146 1.063-.437.292-.291.438-.646.437-1.063 0-.417-.146-.771-.437-1.062A1.453 1.453 0 0 0 6.5 5a1.43 1.43 0 0 0-1.062.438c-.29.293-.436.647-.438 1.062-.002.415.144.769.438 1.063.294.294.648.44 1.062.437Z"
    />
  </svg>
)