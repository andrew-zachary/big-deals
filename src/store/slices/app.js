import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideMenu: {
        toggle: false,
        toAuth: false
    },
    error: {
        msg: '',
        show: false
    },
    loader: {
        show: false
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        sideMenuToggled: (state, action) => {
            state.sideMenu.toggle = action.payload.toggle;
            state.sideMenu.toAuth = action.payload.toAuth;
        },
        errorReceived: (state, action) => {
            state.error.show = true;
            state.error.msg = action.payload.data;
        },
        errorReset: (state, _) => {
            state.error = {...initialState.error};
        },
        loaderToggled: (state, _) => {
            state.loader.show = !state.loader.show;
        },
    }
});

export default appSlice.reducer;
export const {
    sideMenuToggled,
    errorReceived, 
    errorReset, 
    loaderToggled} = appSlice.actions;