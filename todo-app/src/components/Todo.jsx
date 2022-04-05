import './Todo.css';
const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}

      <div className="btn-container">
        <i
          type="button"
          className="check-btn bi bi-check2-all"
          onClick={() => completeTodo(index)}
        ></i>
        <i
          type="button"
          className="delete-btn bi bi-x-circle"
          onClick={() => removeTodo(index)}
        ></i>
      </div>
    </div>
  );
};

export default Todo;
