export type TabProps = {
  label?: string
  className?: string
}

export const Tab = (props: TabProps) => {
  const { label, className } = props
  return (
    <button className={`tab ${className}`}>
      {label}
    </button>
  )
}