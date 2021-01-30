const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map(t => {
        return (
          <h3 key={t.id}>{t.text}</h3>
        )
      })}
    </div>
  )
}

export default Tasks