import { types } from "../types";

const initialState = {
    users: []
}

export default function usersReduser(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_USERS:
            return {...state, users: action.payload}
        default: return state
    }
}