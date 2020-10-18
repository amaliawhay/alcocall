import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorsReducers from "./errorsReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducers,
});
