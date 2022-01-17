import { createAction } from "@reduxjs/toolkit";

const apiStartCall = createAction('api/startCall');
const apiEndCall = createAction('api/endCall');
const apiCallFailed = createAction('api/callFailed');

const userNoProfile = createAction('user/noProfile');

export {apiStartCall, apiEndCall, apiCallFailed, userNoProfile};