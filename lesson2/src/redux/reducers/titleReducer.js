import { types } from "../types"

const initialState = {
    title: ''
}

export default function titleReduser (state = initialState, action) {

    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state, title: 'hello'}
        default: return state
    }
}