import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Variant = 'primary' | 'ghost' | 'light'

const buttonClass = (variant: Variant = 'primary', className?: string) =>
  `${styles.button} ${styles[variant]} ${className ?? ''}`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({ variant = 'primary', className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={buttonClass(variant, className)} data-magnetic {...rest} />
}

interface ButtonLinkProps {
  to: string
  variant?: Variant
  className?: string
  children: ReactNode
}

export function ButtonLink({ to, variant = 'primary', className, children }: ButtonLinkProps) {
  return (
    <Link to={to} className={buttonClass(variant, className)} data-magnetic>
      {children}
    </Link>
  )
}
