import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { apiStartCall } from '../store/actions.js';
import { verifyUserMail } from '../store/end-points/user.js';

const MailVerify = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const {verified} = useSelector(state=>state.user.userInfo.authId.email);
    useEffect(()=>{
        dispatch({type: apiStartCall.type, payload: verifyUserMail(params, null, null, null)})
    }, []);
    return <div id="verify-mail-page" className="h-full flex flex-col items-center justify-center">
        <h1 className='text-6xl capitalize font-mont font-regular'>{verified?'mail verified':'not verified'}</h1>
        <Link className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-8' to="/shopping" path="shopping">continue</Link>
    </div>
};

MailVerify.displayName = 'mail verify page';

export default MailVerify;