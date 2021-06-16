import React from 'react';
import { Todo } from './Types'
import {useDispatch} from 'react-redux'
import {doneTodo, deleteTodo} from '../modules/tasksModule'

interface Props {
    task: Todo
}

const TaskItem = ({task}: Props) => {
    const dispatch = useDispatch()
    return (
        <li>
            <label>
                <input 
                type="checkbox" 
                onClick={() => dispatch(doneTodo(task))}/>
                {task.done ? (
                    <del>{task.title}</del>
                ) : (
                    <span>{task.title}</span>
                )}
            </label>
            <button onClick={() => dispatch(deleteTodo(task))}>削除</button>
        </li>
    )
}

export default TaskItem