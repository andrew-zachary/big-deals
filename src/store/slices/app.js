import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notificationModal: {
        toggle: false,
        text: {
            header: null,
            body: null
        }
    },
    confirmModal: {
        toggle: false,
        text: {
            header: null,
            body: null
        },
        toConfirm: {
            payload: null
        }
    },
    sliderModal: {
        toggle: false,
        clickedIndex: null,
        imgs: []
    },
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
    },
    temp: {
        searchStr: ''
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        notificationModalToggled: (state, action) => {
            state.notificationModal = {...action.payload};
        },
        confirmModalToggled: (state, action) => {
            state.confirmModal = {...action.payload};
        },
        sliderModalToggled: (state, action) => {
            state.sliderModal = {...action.payload};
        },
        footerShowToggled: (state, action) => {
            state.footer = action.payload.toggle;
        },
        sideMenuToggled: (state, action) => {
            state.sideMenu.toggle = action.payload.toggle;
            state.sideMenu.toAuth = action.payload.toAuth;
        },
        errorReceived: (state, action) => {
            state.error.show = true;
            console.log(action.payload.data);
            state.error.msg = action.payload.data;
        },
        errorReset: (state, _) => {
            state.error = {...initialState.error};
        },
        loaderToggled: (state, _) => {
            state.loader.show = !state.loader.show;
        },
        searchStarted: (state, action) => {
            state.temp.searchStr = action.payload.searchStr;
        }
    }
});

export default appSlice.reducer;
export const {
    notificationModalToggled,
    confirmModalToggled,
    sliderModalToggled,
    footerShowToggled,
    sideMenuToggled,
    errorReceived, 
    errorReset, 
    loaderToggled, 
    searchStarted} = appSlice.actions;