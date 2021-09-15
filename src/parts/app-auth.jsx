import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import checkAuth from "../utils/check-token";

import {userAuthChanged} from '../store/slices/app';

const AppAuth = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const auth = {...checkAuth()};
        if(auth.state) {
            dispatch({type:userAuthChanged.type, payload:{auth:true, data:auth.data}});
        }
    }, []);
    return<></>
};

export default AppAuth;