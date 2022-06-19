import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import AvatarManager from '../components/form/avatar-manager.jsx';
import GoAdminBtn from '../components/side-menu/go-admin-btn.jsx';

import { apiStartCall } from '../store/actions.js';
import { logout } from '../store/end-points/user.js';

const UserProfile = ({userInfo, setCurrentPage}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    return <>
        {
            userInfo._id && <div id='user-profile' className='grid content-center'> 
                <div id='user-info-header'>
                    <AvatarManager avatar={userInfo.authId.avatar} />
                    <span className='font-ssp mt-10 block text-5xl font-regular capitalize'>{userInfo.authId.firstName}</span>
                </div>
                <div id='user-info-body' className='flex flex-col items-center justify-center'>
                    <div className='mt-8 font-regular text-4xl'>
                        <p className='capitalize'>
                            <span>$</span><span className='bd-unit font-ssp'>{userInfo.currentBalance}</span>
                        </p>
                    </div>
                    <div className="ctrls mt-20 flex justify-around items-center w-full">
                        <GoAdminBtn dispatch={dispatch} />
                        <button className='bd-font-base h-[7rem] w-[7rem] rounded-full border-2 border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-regular text-white text-4xl capitalize shadow-secondary' onClick={()=>setCurrentPage('orders')}>{t('user_profile.bills')}</button>
                        <button className='p-4 rounded-full bg-primary dark:bg-primary-dark shadow-secondary' onClick={()=>dispatch({type: apiStartCall.type, payload: logout()})}><FaSignOutAlt className='text-4xl text-white' /></button>
                    </div>
                </div>
            </div>
        }
    </>
};

UserProfile.displayName = 'user profile';

export default UserProfile;