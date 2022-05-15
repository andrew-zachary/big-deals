import React from 'react';
import {FaCamera} from 'react-icons/fa'

const AvatarInput = ({dispatch, userAvatarPicked, setMode}) => {
    const handleImgRead = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = ()=> {
            dispatch({type: userAvatarPicked.type, payload: {data:reader.result}});
            e.target.value = "";
            setMode('editing');
        }
    }
    return <label htmlFor='avatar-input' className='inline-block cursor-pointer mt-5 p-2.5 rounded-full bg-primary dark:bg-primary-dark'>
        <input type='file' name='avatar-input' id='avatar-input' onInput={(e)=>handleImgRead(e)} hidden/>
        <FaCamera className='text-4xl text-white' />
    </label>
};

AvatarInput.displayName = 'avatar input';

export default AvatarInput;