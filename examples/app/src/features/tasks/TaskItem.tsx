import type { Task } from './types'
import styles from './TaskItem.module.css'

type TaskItemProps = {
  task: Task
  onToggle: (id: string) => void
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.done ? styles.done : undefined}>{task.title}</span>
      </label>
    </li>
  )
}
