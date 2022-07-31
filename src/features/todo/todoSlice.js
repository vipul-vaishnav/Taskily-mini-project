import { createSlice } from '@reduxjs/toolkit';
import { db } from './../../firebase';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    reset: (state, action) => {
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {},
});

export const { reset } = todoSlice.actions;

export default todoSlice.reducer;
