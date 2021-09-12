import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import jwt_decode from "jwt-decode";

import {userAuthChanged} from '../store/slices/app';

const AppAuth = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        let token = localStorage.getItem("bd-token");
        let ids = localStorage.getItem("bd-user-ids")?{...JSON.parse(localStorage.getItem("bd-user-ids"))}:"";
        if (token !== null && token !== "undefined" && token !== "" && ids !== "") {
            if (!jwt_decode(token).exp < Date.now() / 1000) {
                dispatch({type:userAuthChanged.type, payload:{auth:true, data:ids}});
            }
        }
    }, []);
    return<></>
};

export default AppAuth;