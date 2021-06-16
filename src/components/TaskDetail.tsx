import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../rootReducer';

const TaskDetail = () => {
    const {id}:{id:string} = useParams();
    const {tasks} = useSelector((state: RootState) => state.tasks)
    return (
        <div>
            {tasks.filter((todo) => {
            return todo.id === parseInt(id)
            }).map((t) => (
                <span key={t.id}>{t.title}</span>
            ))}
        </div>
    )
}

export default TaskDetail