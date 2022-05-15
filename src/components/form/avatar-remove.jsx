import React from 'react';
import {FaTimes} from 'react-icons/fa'

const AvatarRemove = ({dispatch, userAvatarPicked, setMode}) => {
    const removeAvatarImg = () => {
        dispatch({type: userAvatarPicked.type, payload: {data: ''}});
        setMode('picking');
    }
    return <button type='button' onClick={()=>removeAvatarImg()} className='inline-block cursor-pointer mt-5 p-2.5 rounded-full bg-primary dark:bg-primary-dark'>
        <FaTimes className='text-4xl text-white' />
    </button>
}

AvatarRemove.displayName = "avatar remove";

export default AvatarRemove;