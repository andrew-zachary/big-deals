import { userAuthed, userAuthedOut, userErrReceived } from "../slices/user.js";

const baseUserUrl = '/bd/users';

//params, lastPage, limit, data
const getUserInfo = (_1, _2, _3, _) => {
    return {
        method: 'GET',
        url: `${baseUserUrl}/profile`,
        onSuccess: userAuthed.type,
        onFail: userErrReceived.type,
        layoutIdle: true
    }
}

//params, lastPage, limit, data
const login = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `/auth/signin`,
        data,
        onSuccess: userAuthed.type,
        onFail: userErrReceived.type,
        layoutIdle: true
    }
}

//params, lastPage, limit, data
const register = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `/auth/signup`,
        data,
        onSuccess: userAuthed.type,
        onFail: userErrReceived.type,
        layoutIdle: true
    }
}

//params, lastPage, limit, data
const logout = (_1, _2, _3, data) => {
    return {
        method: 'GET',
        url: `/auth/signout`,
        data,
        onSuccess: userAuthedOut.type,
        onFail: userErrReceived.type,
        layoutIdle: true
    }
}

export {getUserInfo, login, register, logout};