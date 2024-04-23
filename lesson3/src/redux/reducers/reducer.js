import { combineReducers } from "redux";
import usersReduser from "./usersReducer";

export const rootReducer = combineReducers({
    usersReduser,
})