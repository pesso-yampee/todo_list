import { ReactNode } from 'react'
import styles from './style.module.css'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  ariaLabel?: string
  children: ReactNode
  className: string
}

export function IconButton({ onClick, ariaLabel, children, className }: Props) {
  return (
    <button
      className={styles[className]}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
