import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { layoutContext, layoutActions } from './context.js';

const BurgerBtn = () => {
    const {state, dispatch} = useContext(layoutContext);
    return <button
        className="p-6 rounded-full bg-primary shadow-secondary inline-block"
        onClick={()=>dispatch({type: layoutActions.TOGGLE_MENU_SHOW, payload: {toggle: !state.menu.toggle}})}
    >
        <FaBars className='text-white text-6xl' />
    </button>
}

export default BurgerBtn;