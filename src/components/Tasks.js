import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map(t => {
        return (
          <Task key={t.id} t={t} onDelete={onDelete} onToggle={onToggle}/>
        )
      })}
    </div>
  )
}

export default Tasks