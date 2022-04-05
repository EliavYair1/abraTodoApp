import { useState } from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import Todo from './components/Todo';
import img from './logo/Logo_2022-04-04 (4)/Logo.png';
function App() {
  const [todos, setTodos] = useState([]);
  // adding a task
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  // checking a task
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // removing a task
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div className="todo-list">
        <img src={img} alt="" className="pageLogo" />
        <h1>Todo App</h1>
        <AddTodo addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
