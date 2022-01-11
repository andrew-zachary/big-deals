import React, {useContext} from 'react';
import { useSelector } from 'react-redux';

import { layoutContext, layoutActions } from '../../layout/context.js';

const AuthedActionBtn = ({action, payload, tailWindStyle, children}) => {
    const {dispatch} = useContext(layoutContext);
    const {isAuthed} = useSelector(state=>state.user);
    const authingAction = () => {
        if(isAuthed) {
            action(payload);
        } else {
            dispatch({ type: layoutActions.TOGGLE_MENU_SHOW, payload: {toggle: true} });
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