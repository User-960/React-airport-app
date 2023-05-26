import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { } from '../../models/models';

const ACCESS_KEY: string = 'u-access';
const USERNAME_KEY: string = 'u-username';

interface AuthState {
  access: string
  username: string
  isAuth: boolean
};

const initialState: AuthState = {
  access: localStorage.getItem(ACCESS_KEY) ?? '',
  username: localStorage.getItem(USERNAME_KEY) ?? '',
  isAuth: Boolean(localStorage.getItem(ACCESS_KEY))
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

      localStorage.setItem(ACCESS_KEY, action.payload.access)
      localStorage.setItem(USERNAME_KEY, action.payload.username)
    }
  }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;