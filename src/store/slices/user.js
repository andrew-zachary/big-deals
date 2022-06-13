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
        mode: '',
        lang: 'en'
    }
};

const initialState = {
    userType: undefined,
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
            state.userType = 'user';
        },
        userAuthedOut: (state, _) => {
            state.isAuthed = false;
            state.userInfo = userInfo;
            state.userType = 'anony';
        },
        userMailVerified: (state, _) => {
            state.userInfo.authId.email.verified = true;
        },
        userPrefsUpdated: (state, action) => {
            state.userInfo.appPreferences = action.payload.data
        },
        profileNotFound: (state) => {
            state.userType = 'anony';
        }
    }
});

export default userSlice.reducer;

export const {
    userAuthed, 
    userAuthedOut, 
    userAvatarPicked, 
    userMailVerified,
    userPrefsUpdated,
    profileNotFound
} = userSlice.actions;