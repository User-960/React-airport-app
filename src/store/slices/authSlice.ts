import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { } from '../../models/models';

interface AuthState {
  access: string
  username: string
  isAuth: boolean
};

const initialState: AuthState = {
  access: '',
  username: '',
  isAuth: false
};

interface AuthPayload {
  username: string
  access: string
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthPayload>) {
      state.access = action.payload.access
      state.username = action.payload.username
      state.isAuth = Boolean(action.payload.access)
    }
  }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;