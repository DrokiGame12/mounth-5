import { types } from "./types"

export function addUserAction(user){
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    return async function () {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
    }
}

export async function getUsersAction(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        type: types.FETCH_USERS, 
        payload: data
    }   
}