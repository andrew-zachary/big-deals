import React from 'react';
import {FaCamera} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { userAvatarPicked } from '../../store/slices/user';

const AvatarInput = () => {
    const dispatch = useDispatch();
    const handleImgRead = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = ()=> {
            console.log(reader.result);
            dispatch({type: userAvatarPicked.type, payload: {data:reader.result}});
        }
    }
    return <label htmlFor='avatar-input' className='inline-block cursor-pointer mt-5 p-2.5 rounded-full bg-primary'>
        <input type='file' name='avatar-input' id='avatar-input' onChange={(e)=>handleImgRead(e)} hidden/>
        <FaCamera className='text-4xl text-white' />
    </label>
};

AvatarInput.displayName = 'avatar input';

export default AvatarInput;