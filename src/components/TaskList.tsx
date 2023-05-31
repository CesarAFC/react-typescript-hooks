import { Task } from "../interfaces/Task.interface"
import TaskCard from "./TaskCard"

interface Props {
    tasks: Task[]
    deleteATask: (id: number) => void
}

export default function TaskList({tasks, deleteATask}: Props) {
  return (
    <>
    {tasks.map( task => (
        <div key={task.id} className="col-md-4 pb-2">
            <TaskCard task={task} deleteATask={deleteATask}/>
        </div>
      ))}
      </>
  )
}
