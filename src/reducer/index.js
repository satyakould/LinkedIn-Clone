//import { useReducer } from "react";
import { combineReducers } from "redux";

import userReducer from "./userReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});
// const rootReducer = combineReducers({
//   userState: useReducer,
// });

export default rootReducer;
