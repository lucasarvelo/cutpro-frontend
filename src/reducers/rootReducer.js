import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import optionsReducer from "./optionsReducer";
import cuttingListReducer from "./cuttingListsReducer";

export default combineReducers({
  jobsReducer,
  optionsReducer,
  cuttingListReducer
});
