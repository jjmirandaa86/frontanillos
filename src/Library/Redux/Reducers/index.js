import { combineReducers } from "redux";

import { configurationReducer } from "./configurationReducer";
import { locationReducer } from "./locationReducer";
import { userReducer } from "./userReducer";
import { sessionReducer } from "./sessionReducer";

const reducers = combineReducers({
  user: userReducer,
  session: sessionReducer,
  configuration: configurationReducer,
  location: locationReducer,
});

export default reducers;
