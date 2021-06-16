import React from 'react';
import TaskList from './components/TaskList';
import AddTodo from './components/AddTodo'
import './App.css';

function App() {
  return (
    <div>
      <h1>TODO</h1>
      <AddTodo />
      <TaskList />
    </div>
  );
}

export default App;