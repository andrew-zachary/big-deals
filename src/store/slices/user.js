import { createSlice } from "@reduxjs/toolkit";

const userInfo = {
    authId: {
        _id: '',
        firstName: '',
        lastName: '',
        email: {
            address: '',
            verified: '',
        }
    },
    _id: '',
    currentBalance: '',
    role: ''
};

const initialState = {
    isAuthed: false,
    userInfo,
    userErr: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuthed: (state, action) => {
            state.isAuthed = true;
            state.userInfo = {...action.payload.data};
        },
        userAuthedOut: (state, _) => {
            state.isAuthed = false;
            state.userInfo = userInfo;
        },
        userErrReceived: (state, action) => {
            state.isAuthed = false;
            state.userInfo = userInfo;
            state.userErr = action.payload.err;
        }
    }
});

export default userSlice.reducer;
export const {userAuthed, userAuthedOut, userErrReceived} = userSlice.actions;