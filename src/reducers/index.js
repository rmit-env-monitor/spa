import { combineReducers } from "redux";

import mapReducer from "./mapReducer";
import authReducer from "./authReducer";
import formReducer from "./formReducer";
import measurementReducer from "./measurementReducer";
import nearbyReducer from "./nearbyReducer";
import historyReducer from "./historyReducer";

const mainReducer = combineReducers({
  mapReducer,
  authReducer,
  measurementReducer,
  nearbyReducer,
  historyReducer,
  deep: formReducer
});

export default mainReducer;
