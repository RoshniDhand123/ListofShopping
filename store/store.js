import { combineReducers, createStore } from "redux";

import mealsReducer from "./reducers/meals";

const configureStore =()=> createStore(mealsReducer);
export default configureStore;