import React from 'react';
import {FaCheck} from 'react-icons/fa'

const AvatarUpdate = ({setMode, cropperRef, dispatch, userAvatarPicked}) => {
    const updateAvatar = () => {
        setMode("picking");
        dispatch({type: userAvatarPicked.type, payload: {data: cropperRef.current.cropper.getCroppedCanvas().toDataURL()}});
    }
    return <button type='button' onClick={()=>updateAvatar()} className='inline-block cursor-pointer mt-5 p-2.5 rounded-full bg-primary'>
        <FaCheck className='text-4xl text-white' />
    </button>
};

AvatarUpdate.displayName = "avatar upadte";

export default AvatarUpdate;