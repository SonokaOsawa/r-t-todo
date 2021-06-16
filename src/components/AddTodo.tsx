import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../modules/tasksModule'

const AddTodo = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const createTodo = () => {
        dispatch(addTodo(todo))
        setTodo('')
    }
    return (
        <div>
            <input 
            type="text" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            placeholder="TODOを入力してください"/>
            <button onClick={createTodo}>追加</button>
        </div>
    )
}

export default AddTodo