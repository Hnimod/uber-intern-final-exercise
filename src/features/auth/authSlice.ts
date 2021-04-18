import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { signup } from '../../api/signup';

interface AuthState {
  token: string;
  userName: string;
  rating: number | null;
}

const initialState: AuthState = {
  token: '',
  userName: '',
  rating: null,
};

export const authSignup = createAsyncThunk(
  'auth/signup',
  async (userName: string, { rejectWithValue }) => {
    try {
      const response = await signup(userName);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: (state) => {
      state.token = '';
      state.userName = '';
      state.rating = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authSignup.pending, (state) => {
        state.token = '';
        state.userName = '';
        state.rating = null;
      })
      .addCase(authSignup.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userName = action.payload.userName;
        state.rating = action.payload.rating;
      });
  },
});

export const { signout } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUsername = (state: RootState) => state.auth.userName;
export const selectRating = (state: RootState) => state.auth.rating;

export default authSlice.reducer;
