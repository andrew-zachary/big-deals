import {authLoggedin, authLoggedout} from '../actions/AUTH';
import {userAuthChanged} from "../slices/app";

export default ({ dispatch }) => (next) =>
    async (action) => {
        next(action);
        if(action.type === authLoggedin.type) {
            localStorage.setItem('bd-token', action.payload["x-auth-token"]);
            localStorage.setItem('bd-user-ids', JSON.stringify({...action.payload.data}));
            dispatch({type:userAuthChanged.type, payload:{auth:true, data:{...action.payload.data}}});
        }
        if(action.type === authLoggedout.type) {
            localStorage.removeItem('bd-token');
            localStorage.removeItem('bd-user-ids');
            dispatch({type:userAuthChanged.type, payload:{auth:false}});
        }
};