import axios from "axios";
import { apiStartCall } from "../actions.js";

const baseURL = window.location.host === 'localhost:8000'?'http://localhost:3000/api':'https://andrew-zachary-dev.herokuapp.com/api';
const axiosClient = axios.create({
    baseURL,
    withCredentials: true
});

export default ({dispatch}) => (next) => async (action) => {
    if(action.type !== apiStartCall.type) return next(action);

    next(action);

    const {method, url, data, onSuccess, onFail} = action.payload;

    try {
        const res = await axiosClient.request({
            method,
            url,
            data
        });

        dispatch({ type: onSuccess, payload:{data:res.data} });
    } catch(err) {
        dispatch({ type: onFail, payload:{err: err.response.data} });
    }
}