import { createSlice } from '@reduxjs/toolkit';

const TodoSlicer = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true },
  ],
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },

    todoCompleted(state, action) {
      const todo = state.findIndex((todo) => todo.id === action.payload.id);
      state[todo].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    todosLoading(state, action) {
      return {
        ...state,
        status: 'loading',
      };
    },
  },
});

export const { addTodo, todoCompleted, deleteTodo, todosLoading } =
  TodoSlicer.actions;

export default TodoSlicer.reducer;
