import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    footer: false,
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
        footerShowToggled: (state, action) => {
            state.footer = action.payload.toggle;
        },
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
    footerShowToggled,
    sideMenuToggled,
    errorReceived, 
    errorReset, 
    loaderToggled} = appSlice.actions;