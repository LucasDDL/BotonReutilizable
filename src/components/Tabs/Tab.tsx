import { cn } from "@/lib"

export type TabProps = {
  label?: string
  className?: string
}

export const Tab = (props: TabProps) => {
  const { label, className, ...rest } = props
  return (
    <button className={cn('tab', className)} {...rest}>
      {label}
    </button>
  )
}