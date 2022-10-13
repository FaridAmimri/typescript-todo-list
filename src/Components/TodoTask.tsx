/** @format */

import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
  task: ITask
}

function TodoTask({ task }: Props) {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.task}</span>
        <span>{task.deadline}</span>
      </div>
      <button>X</button>
    </div>
  )
}

export default TodoTask
