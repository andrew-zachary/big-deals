import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { apiStartCall } from '../../store/actions.js';
import { getUserInfo } from '../../store/end-points/user.js';

const Auth = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type: apiStartCall.type, payload:getUserInfo()});
    }, []);
    return <></>
};

Auth.displayName = 'app auth';

export default Auth;