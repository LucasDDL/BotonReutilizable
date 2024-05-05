import { SVGProps } from "react"

export const Google = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.328 11.28v2.187h5.364c-.164 1.226-.583 2.124-1.222 2.755-.785.765-2.007 1.6-4.142 1.6-3.302 0-5.883-2.595-5.883-5.813 0-3.218 2.58-5.814 5.883-5.814 1.78 0 3.084.685 4.042 1.565l1.578-1.538C16.616 4.96 14.828 4 12.328 4 7.804 4 4 7.591 4 12s3.804 8 8.328 8c2.445 0 4.288-.782 5.729-2.24C19.535 16.32 20 14.285 20 12.649c0-.507-.036-.978-.118-1.369h-7.554Z"
    />
  </svg>
)