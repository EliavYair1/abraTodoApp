import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './StoreSlice';

export const store = configureStore({
  reducer: { todos: todoReducer },
});
