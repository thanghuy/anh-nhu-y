import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  title?: string
  icon?: ReactNode
  highlight?: boolean
  className?: string
  children: ReactNode
}

export function Card({ title, icon, highlight, className, children }: CardProps) {
  return (
    <article className={`${styles.card} glare ${highlight ? styles.highlight : ''} ${className ?? ''}`} data-tilt>
      {icon && <div className={styles.icon}>{icon}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.body}>{children}</div>
    </article>
  )
}
