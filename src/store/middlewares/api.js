import {apiStartCall, apiEndCall, apiCallFailed} from "../actions.js";
import { loaderToggled, notificationModalToggled } from "../slices/app.js";
import {axiosClient} from '../../utilities/axiosClient.js';

export default ({dispatch}) => (next) => async (action) => {
    if(action.type !== apiStartCall.type) return next(action);

    next(action);

    const {
        method, 
        url, 
        data, 
        onSuccess, 
        onFail, 
        layoutIdle, 
        notification } = action.payload;

    //start loader
    if(layoutIdle) {
        dispatch({type: loaderToggled.type});
    }

    try {
        const result = await axiosClient.request({
            method,
            url,
            data
        });

        dispatch({ type: onSuccess, payload:{data:result.data} });
        dispatch({ type: apiEndCall.type });
        if(notification) {
            //push notification
            dispatch({type: notificationModalToggled.type, payload:{
                toggle: true,
                text: {
                    header: notification.header,
                    body: notification.body
                }
            }});
        }
    } catch(err) {
        if(err.response) {
            dispatch({ type: onFail, payload:{data: err.response.data} });
        } else {
            dispatch({ type: onFail, payload:{data: 'app.errors.no_connection'} });
        }

        dispatch({ type: apiCallFailed.type });
    }

    if(layoutIdle) {
        //end loader
        dispatch({type: loaderToggled.type});
    }

}