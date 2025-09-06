import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
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
});

export const { updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;