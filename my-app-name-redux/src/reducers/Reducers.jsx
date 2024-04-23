import {combineReducers} from "redux";
import {ToDoReducer} from "./ToDoReducer.jsx";

export const Reducers = combineReducers({toDos: ToDoReducer})