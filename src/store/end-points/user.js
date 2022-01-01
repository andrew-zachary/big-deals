import { userAuthed, userErrReceived } from "../slices/user.js";

const baseUserUrl = '/bd/users';

//params, lastPage, limit
const getUserInfo = (_1, _2, _3) => {
    return {
        method: 'GET',
        url: `${baseUserUrl}/profile`,
        onSuccess: userAuthed.type,
        onFail: userErrReceived.type
    }
}

//params, lastPage, limit
const login = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `/auth/signin`,
        data,
        onSuccess: userAuthed.type,
        onFail: userErrReceived.type
    }
}

//params, lastPage, limit
const register = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `/auth/signup`,
        data,
        onSuccess: userAuthed.type,
        onFail: userErrReceived.type
    }
}

export {getUserInfo, login, register};