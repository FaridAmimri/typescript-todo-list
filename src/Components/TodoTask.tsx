/** @format */

import { ITask } from '../Interfaces'

interface Props {
  item: ITask;
  deleteTask(taskToDelete: string): void
}

function TodoTask({ item, deleteTask }: Props) {
  return (
    <div className='task'>
      <div className='content'>
        <span>{item.task}</span>
        <span>{item.deadline}</span>
      </div>
      <button
        onClick={() => {
          deleteTask(item.task)
        }}
      >
        X
      </button>
    </div>
  )
}

export default TodoTask
