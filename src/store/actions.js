import { createAction } from "@reduxjs/toolkit";

const apiStartCall = createAction('api/startCall');
const apiEndCall = createAction('api/endCall');
const apiCallFailed = createAction('api/callFailed');

const userNoProfile = createAction('user/noProfile');
const passwordResetMailSent = createAction('user/passwordResetMailSent');
const passwordResetDone = createAction('user/passwordResetDone');
const userAvatarChanged = createAction('user/avatarChanged');

export {
    apiStartCall, 
    apiEndCall, 
    apiCallFailed, 
    userNoProfile, 
    passwordResetMailSent, 
    passwordResetDone,
    userAvatarChanged
};