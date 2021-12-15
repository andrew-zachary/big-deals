import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MenuCloseBtn = ({state, dispatch, layoutActions}) => {
    return <button className='p-4' onClick={()=>dispatch({type: layoutActions.TOGGLE_MENU, payload: !state.menu.toggle})}>
        <FaTimes className='text-6xl text-primary' />
    </button>
}

export default MenuCloseBtn;