import { combineReducers } from "redux";
// Reducers
import authReducer from "./authReducer";
// Combine Reducers
var rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
