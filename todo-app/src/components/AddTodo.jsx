import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/StoreSlice';

function AddTodo() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default AddTodo;
