import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MenuCloseBtn = ({state, dispatch, layoutActions}) => {
    return <button className='p-4' onClick={()=>dispatch({type: layoutActions.TOGGLE_MENU_SHOW, payload: {toggle: false, toAuth: false} })}>
        <FaTimes className='text-6xl text-primary' />
    </button>
}

export default MenuCloseBtn;