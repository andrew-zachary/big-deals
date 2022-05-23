import { createAction } from "@reduxjs/toolkit";

const apiStartCall = createAction('api/startCall');
const apiEndCall = createAction('api/endCall');
const apiCallFailed = createAction('api/callFailed');

const passwordResetMailSent = createAction('user/passwordResetMailSent');
const passwordResetDone = createAction('user/passwordResetDone');
const passwordChanged = createAction('user/passwordChangedDone');
const userAvatarChanged = createAction('user/avatarChanged');

export {
    apiStartCall, 
    apiEndCall, 
    apiCallFailed, 
    passwordResetMailSent, 
    passwordResetDone,
    userAvatarChanged,
    passwordChanged
};