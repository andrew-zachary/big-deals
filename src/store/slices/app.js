import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    globalSpinner: {
      show: false,
      processName: "",
    },
    currentError: {
      message: null,
      err: null,
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
      processing: false,
    },
  },
  reducers: {
    globalSpinnerStarted: (state, action) => {
      state.globalSpinner.show = true;
      state.globalSpinner.processName = action.payload.processName;
    },
    currentErrorReceived: (state, action) => {
      state.currentError.message = action.payload.message;
      state.currentError.err = action.payload.err;
      state.currentError.receivedError = true;
    },
    taskModalStarted: (state, action) => {
      state.taskModal.header = action.payload.header;
      state.taskModal.taskName = action.payload.taskName;
      state.taskModal.auth = action.payload.auth;
      state.taskModal.props = { ...action.payload.props };
      state.taskModal.processing = true;
    },
    confirmModalStarted: (state, action) => {
      state.confirmModal.header = action.payload.header;
      state.confirmModal.body = action.payload.body;
      state.confirmModal.toConfirm = action.payload.toConfirm;
      state.confirmModal.toDispatch = action.payload.toDispatch;
      state.confirmModal.props = { ...action.payload.props };
      state.confirmModal.ctrls = { ...action.payload.ctrls };
      state.confirmModal.processing = true;
    },
    notificationModalStarted: (state, action) => {
      state.notificationModal.header = action.payload.header;
      state.notificationModal.body = action.payload.body;
      state.notificationModal.ctrls = { ...action.payload.ctrls };
      state.notificationModal.processing = true;
    },
    toasterStarted: (state, action) => {
      state.toaster.header = action.payload.header;
      state.toaster.body = action.payload.body;
      state.toaster.time = action.payload.time;
      state.toaster.processing = true;
    },
    globalSpinnerEnded: (state) => {
      state.globalSpinner.show = false;
      state.globalSpinner.processName = "";
    },
    processingEnded: (state) => {
      state.taskModal = {
        header: null,
        taskName: null,
        props: null,
        auth: false,
        processing: false,
      };
      state.confirmModal = {
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
      };
      state.notificationModal = {
        header: null,
        body: null,
        ctrls: {
          ok: null,
        },
        processing: false,
      };
      state.currentError = {
        message: null,
        err: null,
        receivedError: false,
      };
    },
    toasterEnded: (state) => {
      state.toaster = {
        header: null,
        body: null,
        time: null,
        processing: false,
      };
    },
  },
});

export const {
  globalSpinnerStarted,
  taskModalStarted,
  confirmModalStarted,
  notificationModalStarted,
  toasterStarted,
  toasterEnded,
  currentErrorReceived,
  processingEnded,
  globalSpinnerEnded,
} = appSlice.actions;

export default appSlice.reducer;