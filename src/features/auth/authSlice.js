import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from './../../firebase';

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// signup
export const registerUser = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  const { email, password } = data;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return { email: res.user.email, displayName: res.user.displayName, uid: res.user.uid };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// login
export const loginUser = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  const { email, password } = data;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { email: res.user.email, displayName: res.user.displayName, uid: res.user.uid };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// google sign in
export const googleSignIn = createAsyncThunk('auth/google', async (_, thunkAPI) => {
  const provider = new GoogleAuthProvider();
  try {
    const res = await signInWithPopup(auth, provider);
    return [{ email: res.user.email, displayName: res.user.displayName, uid: res.user.uid }, res._tokenResponse];
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// sign out
export const signOutUser = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    reset: (state, action) => {
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'User registered successfully';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'User logged in successfully';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(googleSignIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.user = action.payload[0];
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload[1].isNewUser ? 'User registered successfully' : 'User logged in successfully';
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(signOutUser.fulfilled, (state, action) => {
        state.user = null;
        state.isSuccess = true;
        state.message = 'User logged out successfully';
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset, setUser } = authSlice.actions;

export default authSlice.reducer;
