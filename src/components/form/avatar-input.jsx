import React, {useState} from 'react';
import {FaCamera, FaTimes} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { userAvatarPicked } from '../../store/slices/user';

const AvatarInput = () => {
    const [picked, setPicked] = useState(false);
    const dispatch = useDispatch();
    const handleImgRead = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = ()=> {
            setPicked(true);
            dispatch({type: userAvatarPicked.type, payload: {data:reader.result}});
        }
    }
    const removeAvatarImg = () => {
        setPicked(false);
        dispatch({type: userAvatarPicked.type, payload: {data: ''}});
    }
    return <>
        {
            picked && <label onClick={()=>removeAvatarImg()} htmlFor='avatar-remove' className='inline-block cursor-pointer mt-5 p-2.5 rounded-full bg-primary'>
                <FaTimes className='text-4xl text-white' />
            </label>
        }
        {
            !picked && <label htmlFor='avatar-input' className='inline-block cursor-pointer mt-5 p-2.5 rounded-full bg-primary'>
                <input type='file' name='avatar-input' id='avatar-input' onChange={(e)=>handleImgRead(e)} hidden/>
                <FaCamera className='text-4xl text-white' />
            </label>
        }
    </>
};

AvatarInput.displayName = 'avatar input';

export default AvatarInput;