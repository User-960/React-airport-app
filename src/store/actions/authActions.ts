import { AppDispatch } from "..";
import axios from "../../axios";
import { login } from "../slices/authSlice";

interface AuthResponse {
  access: string
  refresh: string
};

interface AuthData {
  id: string
  username: string
  password: string
};

export const register = (data: AuthData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resPost = await axios.post<AuthResponse>('auth-users', data).then(() => axios.get('auth'))
      dispatch(login({
        username: data.username,
        access: resPost.data.access
      }));
    } catch (e) {
      console.log("error", e);
    }
  }
};
