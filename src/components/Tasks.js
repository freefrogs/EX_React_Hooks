import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map(t => {
        return (
          <Task key={t.id} t={t} onDelete={onDelete} />
        )
      })}
    </div>
  )
}

export default Tasks