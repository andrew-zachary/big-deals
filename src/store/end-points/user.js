import { userAuthed, userAuthedOut, userMailVerified } from "../slices/user.js";
import { errorReceived } from "../slices/app.js";
import { userNoProfile } from "../actions.js";

const baseUserUrl = '/bd/users';

//params, lastPage, limit, data
const getUserInfo = (_1, _2, _3, _) => {
    return {
        method: 'GET',
        url: `${baseUserUrl}/profile`,
        onSuccess: userAuthed.type,
        onFail: userNoProfile.type,
        layoutIdle: false
    }
};

//params, lastPage, limit, data
const login = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `/auth/signin`,
        data,
        onSuccess: userAuthed.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, lastPage, limit, data
const register = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `/auth/signup`,
        data,
        onSuccess: userAuthed.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, lastPage, limit, data
const logout = (_1, _2, _3, data) => {
    return {
        method: 'GET',
        url: `/auth/signout`,
        data,
        onSuccess: userAuthedOut.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, lastPage, limit, data
const verifyUserMail = ({mail, token}, _2, _3, _4) => {
    return {
        method: 'GET',
        url: `/auth/verify-email/${mail}/${token}`,
        data: null,
        onSuccess: userMailVerified.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
}

export {getUserInfo, login, register, logout, verifyUserMail};