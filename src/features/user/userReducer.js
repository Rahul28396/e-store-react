import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        updateUser: (state, action) => {
            state = action.payload;
        },

        removeUser: (state) => {
            state = null;
            return state;
        }
    }
})