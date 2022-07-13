import { useState } from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import Todo from './components/Todo';
import img from './logo/Logo_2022-04-04 (4)/Logo.png';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="todo-list">
        <img src={img} alt="" className="pageLogo" />
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
