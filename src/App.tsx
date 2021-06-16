import React from 'react';
import TaskList from './components/TaskList';
import AddTodo from './components/AddTodo';
import TaskDetail from './components/TaskDetail'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <h1>TODO</h1>
      <AddTodo />
      <TaskList />
    </div>
    <Switch>
      <Route path='/task_detail/:id' exact component={TaskDetail}></Route>
    </Switch>
    </Router>
  );
}

export default App;