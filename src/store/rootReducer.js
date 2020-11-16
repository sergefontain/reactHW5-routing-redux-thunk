import { combineReducers } from "redux";
import userReducer from "./userReducer"
import jokeReducer from "./jokeReducer"
import authReducer from "./authReducer";

export default combineReducers({
    user: userReducer,
    joke: jokeReducer,
    auth: authReducer,
  });