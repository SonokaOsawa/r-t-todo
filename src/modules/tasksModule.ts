import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Todo} from '../components/Types'

interface State {
    tasks:Todo[]
}

const initialState: State = {
    tasks:[{
      id:1,
      title:'テスト',
      done:false
    }
  ]}

const todoSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
        addTodo (state:State, action:PayloadAction<string>) {
            const createId = ():number => {
                return Math.floor(Math.random() * 10)
            }
            const newTodo: Todo = {
                id: createId(),
                title: action.payload,
                done: false
            }
            state.tasks = [...state.tasks, newTodo]
        },
        doneTodo (state:State, action:PayloadAction<Todo>) {
            const todo = state.tasks.find(t => t.id === action.payload.id)
            if(todo){
                todo.done = !todo.done
            }
        },
        deleteTodo (state:State, action:PayloadAction<Todo>) {
            state.tasks = state.tasks.filter(t => 
                t.id !== action.payload.id )
        }
    }
})

export const {
    addTodo, doneTodo, deleteTodo
} = todoSlice.actions

export default todoSlice