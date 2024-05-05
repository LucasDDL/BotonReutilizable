import { SVGProps } from "react";

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 14.975c-.133 0-.258-.02-.375-.062a.866.866 0 0 1-.325-.213l-4.6-4.6a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l3.9 3.9 3.9-3.9a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-4.6 4.6c-.1.1-.208.171-.325.213a1.081 1.081 0 0 1-.375.062Z"
    />
  </svg>

)