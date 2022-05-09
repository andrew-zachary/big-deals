import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

import { sideMenuToggled } from '../../store/slices/app.js';

const MenuCloseBtn = () => {
    const dispatch = useDispatch();
    return <button className='p-4' onClick={()=>dispatch({type: sideMenuToggled.type, payload: {toggle: false, toAuth: false} })}>
        <FaTimes className='text-6xl text-primary' />
    </button>
};

export default MenuCloseBtn;