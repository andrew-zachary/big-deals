import { userAuthed, userAuthedOut, userMailVerified, userPrefsUpdated, profileNotFound } from "../slices/user.js";
import { errorReceived } from "../slices/app.js";
import { 
    userAvatarChanged, 
    passwordResetMailSent, 
    passwordResetDone, 
    passwordChanged,
} from "../actions.js";

const baseUserUrl = '/bd/users';

const app_key = "7c6dd89f29bb694039d8023db780597666e695c238a5b10ef30f4ed04b73ce35";

//params, query, data
const getUserInfo = (_1, _2, _3) => {
    return {
        method: 'GET',
        url: `${baseUserUrl}/profile`,
        onSuccess: userAuthed.type,
        onFail: profileNotFound.type,
        layoutIdle: false
    }
};

//params, query, data
const login = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `/auth/signin`,
        data: {...data, app_key},
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
        data: {...data, app_key},
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

//params, query, data
const changeUserAvatar = (_1, _2, data) => {
    return {
        method: 'put',
        url: `${baseUserUrl}/profile/avatar`,
        data,
        onSuccess: userAvatarChanged.type,
        onFail: errorReceived.type,
        layoutIdle: true,
        notification: {
            header: 'big deals',
            body: 'app.notification.avatar_changed'
        }
    }
};

//params, query, data
const changePassword = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `/auth/change-password`,
        data,
        onSuccess: passwordChanged.type,
        onFail: errorReceived.type,
        layoutIdle: true,
        notification: {
            header: 'big deals',
            body: 'app.notification.password_changed'
        }
    }
};

//params, query, data
const updatePreferences = (_1, _2, data) => {
    return {
        method: 'PUT',
        url: `${baseUserUrl}/profile/app`,
        data,
        onSuccess: userPrefsUpdated.type,
        onFail: errorReceived.type,
        layoutIdle: true,
        notification: {
            header: 'big deals',
            body: 'app.notification.prefs_updated'
        }
    }
};

export {
    getUserInfo, 
    login, 
    register, 
    logout, 
    verifyUserMail, 
    requestPasswordRestMail, 
    resettingUserPassword,
    changeUserAvatar,
    changePassword,
    updatePreferences
};