
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'

export default function App() {

  return (
    <div>
      <header>
        <h1>Task Buddy</h1>
        <p>Your friendly task manager</p>
      </header>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
    </div>
  )
}
