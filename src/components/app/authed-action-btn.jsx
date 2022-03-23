import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sideMenuToggled } from '../../store/slices/app.js';

const AuthedActionBtn = ({active = true, action, payload, tailWindStyle, children}) => {
    const dispatch = useDispatch();

    const {isAuthed} = useSelector(state=>state.user);
    const authingAction = () => {
        if(!active) {
            action(payload);
        }
        else if(isAuthed) {
            action(payload);
        } else {
            dispatch({ type: sideMenuToggled.type, payload: {toggle: true, toAuth: true} });
        }
    }
    return <button 
        onClick={()=>authingAction()}
        className={tailWindStyle}>
            {children}
    </button>
};

AuthedActionBtn.displayName = 'authed action btn';

export default AuthedActionBtn;