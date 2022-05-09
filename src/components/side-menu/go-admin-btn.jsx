import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FaCog, FaHome } from 'react-icons/fa';

import { sideMenuToggled } from '../../store/slices/app.js';

const GoAdminBtn = ({dispatch}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isAdminPage = location.pathname.includes('admin');

    const goAdmin = () => {
        if(!isAdminPage) {
            navigate('/admin');
        } else {
            navigate('/');
        }
        dispatch({type: sideMenuToggled.type, payload: {toggle: false, toAuth: false} });
    };

    const pickIcon = () => {
        if(!isAdminPage) {
            return <FaCog className='text-4xl text-white' />
        } else {
            return <FaHome className='text-4xl text-white' />
        }
    }

    return <>
        <button className='bd-unit p-4 rounded-full bg-primary shadow-secondary' onClick={()=>goAdmin()}>
            {pickIcon()}
        </button>
    </>
};

GoAdminBtn.displayName = 'go to admin and back';

export default GoAdminBtn;