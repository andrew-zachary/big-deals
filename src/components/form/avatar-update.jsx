import React from 'react';
import {FaCheck} from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { apiStartCall } from '../../store/actions.js';
import { changeUserAvatar } from '../../store/end-points/user.js';

const AvatarUpdate = ({setMode, cropperRef, dispatch, userAvatarPicked}) => {
    const { isAuthed } = useSelector(state => state.user);
    const updateAvatar = () => {
        setMode("picking");
        dispatch({type: userAvatarPicked.type, payload: {data: cropperRef.current.cropper.getCroppedCanvas().toDataURL()}});
        if(isAuthed) {
            dispatch({type: apiStartCall.type, payload: changeUserAvatar(null, null, {avatar: cropperRef.current.cropper.getCroppedCanvas().toDataURL()})});
        }
    }
    return <button type='button' onClick={()=>updateAvatar()} className='inline-block cursor-pointer mt-5 p-2.5 rounded-full bg-primary'>
        <FaCheck className='text-4xl text-white' />
    </button>
};

AvatarUpdate.displayName = "avatar upadte";

export default AvatarUpdate;