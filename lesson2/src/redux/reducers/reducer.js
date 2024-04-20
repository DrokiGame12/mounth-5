import { combineReducers } from "redux";
import titleReduser from "./titleReducer";
import usersReduser from "./usersReducer";

export const rootReducer = combineReducers({
    titleReduser,
    usersReduser
})