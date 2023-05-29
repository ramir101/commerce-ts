import axios from "axios";
import { Dispatch } from "redux";

export type AuthI = {
  id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  state: string;
  zip: string;
};
interface ActionI {
  type: string;
  auth: {} | AuthI;
}

type tokenI = {
  id: string;
  iat: number;
};

type credentialsI = {
  username: string;
  password: string;
};

export const logout = () => {
  window.localStorage.removeItem("token");
  return { type: "REMOVE_AUTH", auth: {} };
};

export const loginWithToken = () => {
  return async (dispatch: Dispatch) => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "SET_AUTH", auth: response.data as AuthI });
    }
  };
};

export const attemptLogin = (credentials: credentialsI) => {
  return async (dispatch: Dispatch<any>) => {
    const response = await axios.post("/api/auth", credentials);
    window.localStorage.setItem("token", response.data);
    dispatch(loginWithToken());
  };
};

const auth = (state = {}, action: ActionI) => {
  if (action.type === "SET_AUTH") {
    return action.auth;
  }
  if (action.type === "REMOVE_AUTH") {
    return action.auth;
  }
  return state;
};

export default auth;
