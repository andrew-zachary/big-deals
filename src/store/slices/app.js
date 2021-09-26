import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    localization : "",
    currentUserAuth: false,
    currentUserIds: {
      email: "",
      name: "",
      _id: ""
    },
    toastersStack:[],
    globalSpinner: {
      show: false,
      processName: "",
    },
    currentError: {
      message: "",
      errCode: "",
      receivedError: false,
    },
    taskModal: {
      header: null,
      taskName: null,
      props: null,
      processing: false,
      auth: false,
    },
    confirmModal: {
      header: null,
      body: null,
      toConfirm: null,
      toDispatch: null,
      props: null,
      ctrls: {
        cancel: null,
        confirm: null,
      },
      processing: false,
    },
    notificationModal: {
      header: null,
      body: null,
      ctrls: {
        ok: null,
      },
      processing: false,
    },
    toaster: {
      header: null,
      body: null,
      time: null,
    },
  },
  reducers: {
    userAuthChanged:(state, action) => {
      state.currentUserAuth = action.payload.auth;
      state.currentUserIds = {...action.payload.data};
    },
    localizationChanged:(state, action) => {
      state.localization = action.payload.lang;
    },
    globalSpinnerStarted: (state, action) => {
      state.globalSpinner.show = true;
      state.globalSpinner.processName = action.payload.processName;
    },
    currentErrorReceived: (state, action) => {
      state.currentError.message = action.payload.message;
      state.currentError.errCode = action.payload.errCode;
      state.currentError.receivedError = true;
    },
    taskModalStarted: (state, action) => {
      state.taskModal.header = action.payload.header;
      state.taskModal.taskName = action.payload.taskName;
      state.taskModal.auth = action.payload.auth;
      state.taskModal.props = { ...action.payload.props };
      state.taskModal.processing = true;
    },
    globalSpinnerEnded: (state) => {
      state.globalSpinner.show = false;
      state.globalSpinner.processName = "";
    },
    currentErrorEnded:(state) => {
      state.currentError = {
        message: null,
        errCode: null,
        receivedError: false,
      };
    },
    toastAdded: (state, action) => {
      state.toastersStack.push({
        id:Date.now() * ((Math.random() * 100) + 1),
        header:action.payload.header, 
        body:action.payload.body, 
        time:action.payload.time
      });
    },
    toastRemoved: (state, action) => {
      state.toastersStack = state.toastersStack.filter((item)=>{
        return item.id !== action.payload.toastId
      });
    },
  },
});

export const {
  userAuthChanged,
  localizationChanged,
  globalSpinnerStarted,
  currentErrorReceived,
  taskModalStarted,
  globalSpinnerEnded,
  currentErrorEnded,
  toastAdded,
  toastRemoved
} = appSlice.actions;

export default appSlice.reducer;