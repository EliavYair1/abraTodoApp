import Todo from './Todo';
import { useSelector } from 'react-redux';
import { todoCompleted } from '../Redux/StoreSlice';
import './TodoList.css';
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="todo-list">
        {todos &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.complete}
            />
          ))}
      </div>
    </>
  );
};

export default TodoList;
