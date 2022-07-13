import './Todo.css';
import { useDispatch } from 'react-redux';
import { todoCompleted, deleteTodo } from '../Redux/StoreSlice';
const Todo = ({ id, completed, title }) => {
  const dispatch = useDispatch();
  const handleRemove = (index) => {
    dispatch(deleteTodo({ id: id }));
  };
  const handleComplete = (index) => {
    dispatch(todoCompleted({ id: id, completed: !completed }));
  };
  return (
    <div
      className="todo"
      style={{ textDecoration: id.completed ? 'line-through' : '' }}
    >
      {title}

      <div className="btn-container">
        <i
          type="button"
          className="check-btn bi bi-check2-all "
          onClick={handleComplete}
        ></i>
        <i
          type="button"
          className="delete-btn bi bi-x-circle"
          onClick={handleRemove}
        ></i>
      </div>
    </div>
  );
};

export default Todo;
