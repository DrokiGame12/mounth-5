import { configureStore } from "@reduxjs/toolkit"
import postSlice from './PostsSlice'

export const store = configureStore({
    reducer: {
        postSlice
    }
    // middleware: { },
    // devTools: { },
    // preloadedState: { },
    // enhancers: { }
})