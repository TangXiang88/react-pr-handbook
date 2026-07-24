import { TaskBoard } from '../features/tasks/TaskBoard'
import { PageShell } from '../components/ui/PageShell'

export function HomePage() {
  return (
    <PageShell
      title="任务看板（教具）"
      subtitle="react-pr-handbook 示例应用：练习从小改动走到规范 PR"
    >
      <TaskBoard />
    </PageShell>
  )
}
