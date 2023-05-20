import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    email: '',
    password: ''
};
const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});
export const {setUserSlice} = user.actions;
export default user.reducer;