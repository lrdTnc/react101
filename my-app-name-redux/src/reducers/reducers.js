import {todoReducer} from "./todoReducer.js";
import {combineReducers} from "redux";

export const reducers = combineReducers({toDos: todoReducer})