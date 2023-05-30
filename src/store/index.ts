import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import auth from "./auth";
import user from "./user";

const reducer = combineReducers({
  auth,
  user,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export type RootState = ReturnType<typeof store.getState>;

export * from "./auth";
export * from "./user";
