import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {currentErrorEnded} from "../store/slices/app";

const Connection = ()=> {
    const {t} = useTranslation();
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(()=>{
        return () => {
            dispatch({type:currentErrorEnded.type});
        }
    }, []);
    return (
        <div id="connection-page" className="text-center">
            <i className="fas fa-exclamation-triangle mb-4"></i>
            <h1>{t(`${location.state.notification}.title`)}</h1>
            <h2>{t(`${location.state.notification}.body`)}</h2>
        </div>
    )
}

export default Connection;