import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersSlice: (state, action) => {
            state = action.payload;
            return state;
        },
        addUserSlice: (state, action) => {
            state.push(action.payload);
            return state;
        },
        editUserSlice: (state, action) => {
            state = state.map(user => user.id === action.payload.id ? action.payload : user);
            return state;
        },
        deleteUserSlice: (state, action) => {
            state = state.filter(user => user.id !== action.payload.id);
            return state;
        }
    }
});
export const {getUsersSlice, addUserSlice, editUserSlice, deleteUserSlice} = users.actions;
export default users.reducer;