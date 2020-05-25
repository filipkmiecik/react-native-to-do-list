import { combineReducers } from "redux";

import { addTodo, removeTodo } from "./todos";

export default combineReducers({ addTodo, removeTodo });
