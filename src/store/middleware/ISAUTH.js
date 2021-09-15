import checkAuth from "../../utils/check-token";
import {currentErrorReceived} from "../slices/app"
import {authLoggedout} from "../actions/AUTH"

export default ({ dispatch }) => (next) => (action) => {
    if(action.payload !== undefined) {
        if(action.payload.needAuth !== undefined && action.payload.needAuth) {
            const auth = {...checkAuth()};
            if(!auth.state) {
                dispatch({type:authLoggedout.type});
                return dispatch({
                    type:currentErrorReceived.type, 
                    payload: {
                        errCode: "TOKENINVALID",
                        message: "please login"
                    }
                });
            }
        }
    }
    next(action);
};