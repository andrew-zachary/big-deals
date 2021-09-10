import { http_client } from "../../utils/http";
import { apiCallStarted, apiCallEnded, apiCallFailed } from "../actions/API";
import {currentErrorReceived, globalSpinnerStarted, globalSpinnerEnded} from "../slices/app"

export default ({ dispatch }) => (next) =>
    async (action) => {
        if (action.type !== apiCallStarted.type) return next(action);
        next(action);

        //start app spinner
        dispatch({type:globalSpinnerStarted.type, payload:{processName:"test"}});

        const { url, method, data, onSuccess } = action.payload;
        
        try {
            const res = await http_client.request({
                url,
                method,
                data,
            });
            dispatch({ type: apiCallEnded.type });
            dispatch({
                type: onSuccess,
                payload: {
                    data: res.data,
                },
            });
        } catch (err) {
            dispatch({ type: apiCallFailed.type });
            console.log({...err});
            dispatch({
                type:currentErrorReceived.type, 
                payload: {
                    errCode:err.code?err.code:"NOCODE",
                    message: err.response?err.response.data.err:"NOMESSAGE"
                }
            });
        }
    //end app spinner
    dispatch({type:globalSpinnerEnded.type});
};