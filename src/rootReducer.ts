import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from './modules/tasksModule'

const rootReducer = combineReducers({
    tasks: todoSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
