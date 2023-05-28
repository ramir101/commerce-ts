import axios from "axios";
import { Dispatch } from "redux";
interface ActionI {
  type: string;
  auth: {};
}

export const auth = (state = {}, action: ActionI) => {
  if (action.type === "SET_AUTH") {
    return action.auth;
  }
  return state;
};

export const logout = () => {
  window.localStorage.removeItem("token");
  return { type: "SET_AUTH", auth: {} };
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
      dispatch({ type: "SET_AUTH", auth: response.data });
    }
  };
};

export const attemptLogin = (credentials: any) => {
  return async (dispatch: Dispatch<any>) => {
    console.log(credentials, "logging credentials");
    const response = await axios.post("/api/auth", credentials);
    window.localStorage.setItem("token", response.data);
    dispatch(loginWithToken());
  };
};
