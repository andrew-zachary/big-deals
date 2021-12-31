import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    userInfo: {
        firstName: '',
        lastName: '',
        email: {
            address: '',
            verified: '',
        },
        balance: '',
        role: ''
    },
    userErr: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuthed: (state, action) => {
            state.isAuth = true;
        },
        userErrReceived: (state, action) => {
            state.userErr = action.payload.err;
        }
    }
});

export default userSlice.reducer;
export const {userAuthed, userErrReceived} = userSlice.actions;