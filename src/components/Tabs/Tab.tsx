export type TabProps = {
  label?: string
  className?: string
}

export const Tab = (props: TabProps) => {
  const { label, className, ...rest } = props
  return (
    <button className={`tab ${className}`} {...rest}>
      {label}
    </button>
  )
}