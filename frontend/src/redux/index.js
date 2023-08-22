import { configureStore } from '@reduxjs/toolkit'
import userSliceReucer from "./userSlice"

export const store = configureStore({
    reducer: {
        user: userSliceReucer
    },
})