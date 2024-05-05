import { SVGProps } from "react";

export const Domain = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M2 19V5c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 4 3h6c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v2h8c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v10c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 20 21H4c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 2 19Zm2 0h2v-2H4v2Zm0-4h2v-2H4v2Zm0-4h2V9H4v2Zm0-4h2V5H4v2Zm4 12h2v-2H8v2Zm0-4h2v-2H8v2Zm0-4h2V9H8v2Zm0-4h2V5H8v2Zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2v2Zm4-6v-2h2v2h-2Zm0 4v-2h2v2h-2Z"
        />
    </svg>
) 