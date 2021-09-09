import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

const AppError = () => {
    const {errCode} = useSelector(state=> state.app.currentError);
    let {push} = useHistory();
    useEffect(()=>{
        if(errCode === "ECONNABORTED") {
            push("/connection");
        }
    },[errCode]);
    return <></>
};

export default AppError;