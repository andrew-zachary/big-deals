import React from 'react';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { apiStartCall } from '../store/actions.js';
import { logout } from '../store/end-points/user.js';

const UserProfile = ({userInfo, setCurrentPage}) => {
    const dispatch = useDispatch();
    return <>
        {
            userInfo._id && <> 
                <div id='user-info-header'>
                    <span className='text-5xl font-mont font-regular capitalize'>hi {userInfo.authId.firstName}</span>
                </div>
                <div id='user-info-body' className='flex flex-col items-center justify-center'>
                    <div className='mt-8 font-ssp font-regular text-4xl'>
                        <p className='capitalize'>
                            <span>your balance : </span><span>$</span><span className='bd-unit'>{userInfo.currentBalance}</span>
                        </p>
                    </div>
                    <div className="ctrls mt-20 flex justify-around items-center w-full">
                        <button className='bd-unit p-4 rounded-full bg-primary shadow-secondary' onClick={()=>dispatch({type: apiStartCall.type, payload: logout()})}><FaCog className='text-4xl text-white' /></button>
                        <button className='bd-unit px-4 py-8 rounded-full border-2 border-primary bg-primary font-mont font-regular text-white text-4xl capitalize shadow-secondary' onClick={()=>setCurrentPage('orders')}>bills</button>
                        <button className='bd-unit p-4 rounded-full bg-primary shadow-secondary' onClick={()=>dispatch({type: apiStartCall.type, payload: logout()})}><FaSignOutAlt className='text-4xl text-white' /></button>
                    </div>
                </div>
            </>
        }
    </>
};

UserProfile.displayName = 'user profile';

export default UserProfile;