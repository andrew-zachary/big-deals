import React from 'react';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { apiStartCall } from '../store/actions.js';
import { logout } from '../store/end-points/user.js';

const UserProfile = ({userInfo}) => {
    const dispatch = useDispatch();
    return <>
        {
            userInfo._id && <> 
                <div id='user-info-header'>
                    <span className='text-4xl font-mont font-regular'>hello {userInfo.authId.firstName}</span>
                </div>
                <div id='user-info-body' className='flex flex-col items-center justify-center'>
                    <div id="ctrls" className='mt-8'>
                        <button className='bd-unit' onClick={()=>dispatch({type: apiStartCall.type, payload: logout()})}><FaCog className='text-4xl' /></button>
                        <button className='bd-unit' onClick={()=>dispatch({type: apiStartCall.type, payload: logout()})}><FaSignOutAlt className='text-4xl' /></button>
                    </div>
                    <div className='mt-8 text-5xl font-mont font-regular'>
                        <span>$</span><span className='bd-unit'>{userInfo.currentBalance}</span>
                    </div>
                </div>
            </>
        }
    </>
};

UserProfile.displayName = 'user profile';

export default UserProfile;