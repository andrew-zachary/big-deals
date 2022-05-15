import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { sideMenuToggled } from '../store/slices/app.js';

const BurgerBtn = () => {
    const dispatch = useDispatch();
    return <button
        className="p-6 rounded-full bg-primary dark:bg-primary-dark shadow-secondary inline-block"
        onClick={()=>dispatch({type: sideMenuToggled.type, payload: {toggle: true, toAuth: false}})}
    >
        <FaBars className='text-white text-6xl' />
    </button>
}

BurgerBtn.displayName = "sideMenu burger button";

export default BurgerBtn;