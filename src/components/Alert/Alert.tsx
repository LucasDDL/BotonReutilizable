import { CheckCircleOutline, ErrorOutline, InfoOutline, WarningOutline } from "@/icons/components";
import { PropsWithChildren, ReactNode, useMemo } from "react";

export type AlertProps = PropsWithChildren & {
  className?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  severity?: 'success' | 'error' | 'warning' | 'info'
  variant?: 'contained' | 'outlined'
}

export const Alert = (props: AlertProps) => {
  const { className, startIcon, endIcon, children, severity = 'info', variant } = props

  const icon = useMemo(() => {
    if (startIcon !== undefined) {
      return startIcon
    }

    switch (severity) {
      case 'success':
        return <CheckCircleOutline />
      case 'error':
        return <ErrorOutline />
      case 'info':
        return <InfoOutline />
      case 'warning':
        return <WarningOutline />
      default:
        return null
    }

  }, [severity, startIcon])

  return (
    <div className={`alert alert-${severity} alert-${variant} ${className}`}>
      {icon}
      {children}
      {endIcon}
    </div>
  )
}