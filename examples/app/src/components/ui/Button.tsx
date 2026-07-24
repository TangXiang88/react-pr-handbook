import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, type = 'button', ...props }: ButtonProps) {
  const merged = className ? `${styles.button} ${className}` : styles.button
  return <button type={type} className={merged} {...props} />
}
