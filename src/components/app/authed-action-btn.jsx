import React, {useContext} from 'react';
import { useSelector } from 'react-redux';

import { layoutContext, layoutActions } from '../../layout/context.js';

const AuthedActionBtn = ({active = true, action, payload, tailWindStyle, children}) => {
    const {dispatch} = useContext(layoutContext);
    const {isAuthed} = useSelector(state=>state.user);
    const authingAction = () => {
        if(!active) {
            console.log("test 1");
            action(payload);
        }
        else if(isAuthed) {
            console.log("test 2");
            action(payload);
        } else {
            console.log("test 3");
            dispatch({ type: layoutActions.TOGGLE_MENU_SHOW, payload: {toggle: true, toAuth: true} });
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