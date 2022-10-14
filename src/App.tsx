/** @format */

import { ChangeEvent, FC, useState } from 'react'
import './App.css'
import TodoTask from './Components/TodoTask'
import { ITask } from './Interfaces'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  function addTask(): void {
    const newTask = { task, deadline }
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }

  function deleteTask(taskToDelete: string): void {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDelete
      })
    )
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='Deadline'
            name='deadline'
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} item={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}

export default App
