import axios from "axios";
import { Dispatch } from "redux";
import { UserI } from "./user";

interface ActionAuthI {
  type: string;
  auth: boolean;
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
  return { type: "REMOVE_AUTH", auth: false };
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
      dispatch({ type: "SET_AUTH", auth: true });
      dispatch({ type: "SET_USER", user: response.data as UserI });
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

const auth = (state = false, action: ActionAuthI) => {
  if (action.type === "SET_AUTH") {
    return action.auth;
  }
  if (action.type === "REMOVE_AUTH") {
    return action.auth;
  }
  return state;
};

export default auth;
