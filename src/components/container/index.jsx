
export function Container({ className, ...props }) {
  return (
    <div
      className={`mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 ${className}`}
      {...props}
    />
  )
}
