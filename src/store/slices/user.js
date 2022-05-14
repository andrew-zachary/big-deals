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
    role: '',
    appPreferences: {
        mode: ''
    }
};

const initialState = {
    isAuthed: false,
    userInfo,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAvatarPicked: (state, action) => {
            state.userInfo.authId.avatar = action.payload.data;
        },
        userAuthed: (state, action) => {
            state.isAuthed = true;
            state.userInfo = {...action.payload.data};
        },
        userAuthedOut: (state, _) => {
            state.isAuthed = false;
            state.userInfo = userInfo;
        },
        userMailVerified: (state, _) => {
            state.userInfo.authId.email.verified = true;
        },
        userPrefsUpdated: (state, action) => {
            state.userInfo.appPreferences = action.payload.data
        }
    }
});

export default userSlice.reducer;

export const {
    userAuthed, 
    userAuthedOut, 
    userAvatarPicked, 
    userMailVerified,
    userPrefsUpdated
} = userSlice.actions;