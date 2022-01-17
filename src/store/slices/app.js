import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
export const {errorReceived, errorReset, loaderToggled} = appSlice.actions;