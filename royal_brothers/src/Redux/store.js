import {loginReducer} from "./Login/loginReducer"
import { createStore } from "redux";
import { combineReducers } from "redux";

const reducer = combineReducers({ isLogin: loginReducer,});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);