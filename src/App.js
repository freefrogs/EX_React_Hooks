import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'eat ice-cream',
      day: '01.01.2021 at 7:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'eat ice-cream',
      day: '01.01.2021 at 8:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'eat ice-cream',
      day: '01.01.2021 at 9:00am',
      reminder: false,
    },
  ])
  //setTasks([...tasks, {}]) -> aktualizacja state

  //fetching data
 /*  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  
  const fetchTask = async () => {
    const res = await fetch('url')
    const data = await res.json()

    return data
  } */

  //delete task
  const deleteTask = (id) => {
    /* await fetch(`url/${id}`, {method: 'DELETE',}) */
    setTasks(tasks.filter(t => t.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(t => t.id === id ? {...t, reminder: !t.reminder} : t))
  }

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //add task with API
 /*  const addTask = async (task) => {
    const res = await fetch('url', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  } */

  return (
    <div className="container">
      <Header onShow={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No task to show'
      )}
    </div>
  );
}

export default App;
