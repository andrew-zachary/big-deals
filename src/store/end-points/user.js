import { userAuthed, userAuthedOut, userMailVerified } from "../slices/user.js";
import { errorReceived } from "../slices/app.js";
import { userNoProfile, passwordResetMailSent, passwordResetDone } from "../actions.js";

const baseUserUrl = '/bd/users';

//params, query, data
const getUserInfo = (_1, _2, _3) => {
    return {
        method: 'GET',
        url: `${baseUserUrl}/profile`,
        onSuccess: userAuthed.type,
        onFail: userNoProfile.type,
        layoutIdle: false
    }
};

//params, query, data
const login = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `/auth/signin`,
        data,
        onSuccess: userAuthed.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, query, data
const register = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `/auth/signup`,
        data,
        onSuccess: userAuthed.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, query, data
const logout = (_1, _2, data) => {
    return {
        method: 'GET',
        url: `/auth/signout`,
        data,
        onSuccess: userAuthedOut.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, query, data
const verifyUserMail = ({mail, token}, _2, _3) => {
    return {
        method: 'GET',
        url: `/auth/verify-email/${mail}/${token}`,
        data: null,
        onSuccess: userMailVerified.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, query, data
const requestPasswordRestMail = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `/auth/forgot-password`,
        data,
        onSuccess: passwordResetMailSent.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, query, data
const resettingUserPassword = ({email, date, token}, _2, data) => {
    return {
        method: 'POST',
        url: `/auth/reset-password/${email}/${date}/${token}`,
        data,
        onSuccess: passwordResetDone.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

export {getUserInfo, login, register, logout, verifyUserMail, requestPasswordRestMail, resettingUserPassword};