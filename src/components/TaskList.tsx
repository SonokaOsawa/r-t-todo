import React from 'react';
import TaskItem from './TaskItem'
import { Todo } from './Types'
import {useSelector} from 'react-redux'
import {RootState} from '../rootReducer'

const TaskList = () => {
    const {tasks} = useSelector((state: RootState) => state.tasks)
    return (
        <div>
            {tasks.length <= 0 ? 'TODOがありません' :
            <ul>
                {tasks.map(task => (
                    <TaskItem 
                    key={task.id} 
                    task={task}
                    />
                ))}
                </ul>}
        </div>
    )
}

export default TaskList