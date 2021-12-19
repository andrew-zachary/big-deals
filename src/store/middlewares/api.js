import axios from "axios";
import { apiStartCall } from "../actions.js";

const axiosClient = axios.create({baseURL: 'https://andrew-zachary-dev.herokuapp.com/api'});

export default ({dispatch}) => (next) => async (action) => {
    if(action.type !== apiStartCall.type) return next(action);

    next(action);

    const {method, url, onSuccess} = action.payload;

    try {
        const res = await axiosClient.request({
            method,
            url
        });
        dispatch({ type: onSuccess, payload:{data:res.data} });
    } catch(err) {
        console.log(err);
    }
}