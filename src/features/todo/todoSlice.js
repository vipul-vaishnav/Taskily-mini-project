import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from './../../firebase';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// add todo
export const addTodo = createAsyncThunk('todo/add', async (formData, thunkAPI) => {
  const new_todo = { ...formData };
  new_todo.timestamp = serverTimestamp();
  try {
    await addDoc(collection(db, 'todos'), new_todo);
    return new_todo;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// get todos
export const getTodos = createAsyncThunk('todo/get', async () => {
  const querySnapshot = await getDocs(collection(db, 'todos'));
  const todosArr = [];
  querySnapshot.forEach((doc) => {
    const task = {
      id: doc.id,
      ...doc.data(),
    };
    todosArr.push(task);
  });
  return todosArr;
});

// get pending todos
export const getPendingTodos = createAsyncThunk('todo/getPending', async () => {
  const querySnapshot = await getDocs(collection(db, 'todos'));
  const todosArr = [];
  querySnapshot.forEach((doc) => {
    const task = {
      id: doc.id,
      ...doc.data(),
    };
    if (task.status === 'pending') todosArr.push(task);
  });
  return todosArr;
});

// get completed todos
export const getCompletedTodos = createAsyncThunk('todo/getCompleted', async () => {
  const querySnapshot = await getDocs(collection(db, 'todos'));
  const todosArr = [];
  querySnapshot.forEach((doc) => {
    const task = {
      id: doc.id,
      ...doc.data(),
    };
    if (task.status === 'completed') todosArr.push(task);
  });
  return todosArr;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(getPendingTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPendingTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(getCompletedTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCompletedTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.unshift(action.payload);
      });
  },
});

export const { reset } = todoSlice.actions;

export default todoSlice.reducer;
