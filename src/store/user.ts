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
