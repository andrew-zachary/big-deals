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
    testAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvvbFRDiGafT0jv4FFSmirNyaLuQ_obm_P8JMel822HZeVWimCbRf8rh71cc&s',
    userErr: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        testAvatarSaved: (state, action) => {
            state.testAvatar = action.payload.avatar;
        },
        userAuthed: (state, action) => {
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
export const {userAuthed, userAuthedOut, testAvatarSaved} = userSlice.actions;