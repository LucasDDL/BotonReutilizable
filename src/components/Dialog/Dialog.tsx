import { cn } from "@/lib"
import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import { Backdrop } from "../Backdrop"

export type DialogProps = PropsWithChildren & {
  className?: string
  open?: boolean
  centered?: boolean
  onClose?: () => void
}

export const Dialog = (props: DialogProps) => {
  const { children, centered, className, open } = props

  if (!open) {
    return null
  }

  return createPortal(
    <Backdrop className={cn('dialog', centered && 'flex items-center justify-center', className)}>
      <div className="dialog-content bg-white w-full max-w-md rounded-lg shadow-lg p-4 pointer-events-auto">
        {children}
      </div>
    </Backdrop>,
    document.body
  )
}