import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

const AppError = () => {
    const {errCode, message} = useSelector(state=> state.app.currentError);
    let {push} = useHistory();
    useEffect(()=>{
        if(errCode === "NOCODE" && message === "NOMESSAGE") {
            push("/connection", {notification:"connection.noresponse"});
        }
        if(errCode === "ECONNABORTED") {
            push("/connection", {notification:"connection.timeout"});
        }
    },[errCode, message]);
    return <></>
};

export default AppError;