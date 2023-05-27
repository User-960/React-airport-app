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
      const resCheck = await axios.get('auth-users', {
        params: {
          username: data.username
        }
      })

      if (!resCheck.data[0]) {
        await axios.post<AuthResponse>('auth-users', data).then(() => axios.get('auth')).then((dataServ) => {
          dispatch(login({
            username: data.username,
            access: dataServ.data.access
          }))
        })
      }
    } catch (e) {
      console.log("error", e);
    }
  }
};

export const loginApp = (data: AuthData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resLogin = await axios.get('auth-users', { params: {
          username: data.username,
          password: data.password
        }
      })

      if (resLogin.data[0]) {
        await axios.get<AuthResponse>('auth').then((data) => {
          dispatch(login({
            username: resLogin.data[0].username,
            access: data.data.access
          }))
        })
      }
    } catch (e) {
      console.log("error", e);
    }
  }
};
