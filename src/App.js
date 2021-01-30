import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'eat ice-cream',
      day: '01.01.2021 at 7:00am',
      remider: true,
    },
    {
      id: 2,
      text: 'eat ice-cream',
      day: '01.01.2021 at 8:00am',
      remider: true,
    },
    {
      id: 3,
      text: 'eat ice-cream',
      day: '01.01.2021 at 9:00am',
      remider: false,
    },
  ])
  //setTasks([...tasks, {}]) -> aktualizacja state

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No task to show'
      )}
    </div>
  );
}

export default App;
