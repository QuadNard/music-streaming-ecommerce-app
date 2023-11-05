import { clsx } from "clsx"

export function Skeleton({ className, ...props }) {
  return (
    <span
      className={clsx(
        className,
        "skeleton inline-block h-[1em] w-20 rounded-[0.2em] align-middle"
      )}
      {...props}
    />
  )
}