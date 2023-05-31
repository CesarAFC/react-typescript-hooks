import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Task } from '../interfaces/Task.interface'

interface Props {
  addANewTask: (task: Task) => void
}

type handleInputchange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const initialState = {
  title: '',
  description: '',
}

export default function TaskForm({addANewTask}: Props) {
  const [task, setTask] = useState<Task>(initialState)

  const handleInputchange = ({target: {name, value} }: handleInputchange) => {
    setTask({
      ...task,
      [name]: value
    })
  }

  const handleSubmitNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addANewTask(task)
    setTask(initialState)
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmitNewTask}>
        <input
          type="text"
          value={task.title}
          placeholder="Jot a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputchange}
          required
        />
        <textarea
          name="description"
          value={task.description}
          rows={2}
          className="form-control mb-3 shadow-none border-0"
          placeholder='Write a description'
          onChange={handleInputchange}
          required
        >
        </textarea>
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
