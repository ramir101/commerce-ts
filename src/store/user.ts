import axios from "axios";
import { Dispatch } from "redux";

export type UserI = {
  id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  state: string;
  zip: string;
};

interface ActionUserI {
  type: string;
  user: UserI;
}

export const fetchUser = () => {
  return async (dispatch: Dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get("/api/user", {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "SET_USER", user: response.data });
  };
};

const user = (
  state: UserI = {
    id: "",
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    state: "",
    zip: "",
  },
  action: ActionUserI
) => {
  if (action.type === "SET_USER") {
    return action.user;
  }
  if (action.type === "UPDATE_USER") {
    return action.user;
  }
  return state;
};

export default user;
