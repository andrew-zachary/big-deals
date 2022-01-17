import {apiStartCall, apiEndCall, apiCallFailed} from "../actions.js";
import { loaderToggled } from "../slices/app.js";
import {axiosClient} from '../../utilities/axiosClient.js';

export default ({dispatch}) => (next) => async (action) => {
    if(action.type !== apiStartCall.type) return next(action);

    next(action);

    const {method, url, data, onSuccess, onFail, layoutIdle} = action.payload;

    //start loader
    if(layoutIdle) {
        dispatch({type: loaderToggled.type});
    }

    try {
        const result = await axiosClient.request({
            method,
            url,
            data,
            layoutIdle
        });

        if(result.response && [404, 403, 401].includes(result.response.status)) {
            dispatch({ type: onFail, payload:{data: result.response.data} });
        } else {
            dispatch({ type: onSuccess, payload:{data:result.data} });
        }

        dispatch({ type: apiEndCall.type });
    } catch(err) {
        if(err.response) {
            dispatch({ type: onFail, payload:{err: err.response.data} });
        }

        dispatch({ type: apiCallFailed.type });
    }

    if(layoutIdle) {
        //end loader
        dispatch({type: loaderToggled.type});
    }
}