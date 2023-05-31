
// Normalmente los componentes tienen esta estructura, 
// donde se expresa el componente y luego tambien sus tipos de datos
// interface y componente

import { useState } from "react"
import logo from './assets/react.svg'
import { Task } from "./interfaces/Task.interface"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

interface Props {
  title?: string
}


function App({title}: Props) {

  // function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: 'Learn TS and React',
    description: 'Learn TS and React',
    completed: false,
  }])

  const getCurrentTimeStap = ():number => new Date().getTime();

  const addANewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimeStap(), completed: false}])

  const deleteATask = (id: number) => setTasks(tasks.filter( task => task.id !== id));
  

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      {/* NavBar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App