import { combineReducers } from "redux";

import { languageReducers } from "./languageReducers";
import { contadorReducers } from "./contadorReducers";
import { userReducers } from "./userReducers";

/* import { configurationReducer } from "./configurationReducer";
import { locationReducer } from "./locationReducer";
import { userReducer } from "./userReducer";
import { sessionReducer } from "./sessionReducer"; */

const reducers = combineReducers({
  //contador: contadorReducers,
  settings: languageReducers,
  user: userReducers,

  /*language: languageReducers,
   user: userReducer,
  session: sessionReducer,
  configuration: configurationReducer,
  location: locationReducer, */
});

export default reducers;
