import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import optionsReducer from "./optionsReducer";

export default combineReducers({
  jobsReducer,
  optionsReducer
});
