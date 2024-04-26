import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {},
    reducers: {
        postUser: (state, action) => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            }
            fetch('https://jsonplaceholder.typicode.com/users', options)
        }
    }
})

export const { postUser } = postSlice.actions

export default postSlice.reducer