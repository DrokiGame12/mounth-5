import { types } from "../types";

const initialState = {
    users: []
}

export default function usersReduser(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_USERS:
            return {
                users: action.payload
            }
        default: return state
    }
}