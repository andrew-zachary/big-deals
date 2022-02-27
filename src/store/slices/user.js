import { createSlice } from "@reduxjs/toolkit";

const userInfo = {
    authId: {
        _id: '',
        firstName: '',
        lastName: '',
        email: {
            address: '',
            verified: '',
        },
        avatar: ''
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
            console.log(action.payload.data);
            state.isAuthed = true;
            state.userInfo = {...action.payload.data};
        },
        userAuthedOut: (state, _) => {
            state.isAuthed = false;
            state.userInfo = userInfo;
        }
    }
});

export default userSlice.reducer;
export const {userAuthed, userAuthedOut} = userSlice.actions;