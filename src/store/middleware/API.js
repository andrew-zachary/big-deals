import { http_client } from "../../utils/http";
import { apiCallStarted, apiCallEnded, apiCallFailed } from "../actions/API";
import {currentErrorReceived} from "../slices/app"

export default ({ dispatch }) => (next) =>
    async (action) => {
        if (action.type !== apiCallStarted.type) return next(action);
        next(action);
        const { url, method, data, onSuccess } = action.payload;
        try {
            const res = await http_client.request({
                url,
                method,
                data,
            });
            dispatch({
                type: onSuccess,
                payload: {
                    data: res.data,
                },
            });
            dispatch({ type: apiCallEnded.type });
        } catch (err) {
            dispatch({
                type:currentErrorReceived.type, 
                payload: {
                    errCode:err.code?err.code:"",
                    message: err.response?err.response.data.err:""
                }
            });
            dispatch({ type: apiCallFailed.type });
    }
};