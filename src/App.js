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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
