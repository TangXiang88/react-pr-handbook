import type { ReactNode } from 'react'
import styles from './PageShell.module.css'

type PageShellProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <p className={styles.brand}>react-pr-handbook</p>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
