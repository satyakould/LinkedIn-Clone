import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// const store = createStore(rootReducer, {});

export default store;
