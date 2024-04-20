import { types } from "./types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function asynkFunctinAction() {
    return function(){
        setTimeout(()=>{
            alert('Hello world!')
        }, 2000)
    }
}

function getUsersAction(users) {
    return {
        type: types.HANDLE_CLICK,
        payload: users
    }
}

export function fetchUsersAction(reducer) {
    return async function () {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        reducer(getUsersAction(data))
    }
}