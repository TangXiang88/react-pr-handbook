import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import { TaskItem } from './TaskItem'
import type { Task } from './types'
import styles from './TaskBoard.module.css'

const initialTasks: Task[] = [
  { id: '1', title: '读完默认假设与降级', done: true },
  { id: '2', title: '本地跑起 examples/app', done: false },
  { id: '3', title: '做一处小改动并开练习 PR', done: false },
]

export function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [draft, setDraft] = useState('')

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function addTask() {
    const title = draft.trim()
    if (!title) return
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, done: false },
    ])
    setDraft('')
  }

  return (
    <div className={styles.board}>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggle} />
        ))}
      </ul>
      <div className={styles.composer}>
        <input
          className={styles.input}
          value={draft}
          placeholder="加一条练习任务…"
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') addTask()
          }}
        />
        <Button onClick={addTask}>添加</Button>
      </div>
    </div>
  )
}
