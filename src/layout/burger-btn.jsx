import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { layoutContext, layoutActions } from './context.js';

const BurgerBtn = () => {
    const {state, dispatch} = useContext(layoutContext);
    return <button
        className="p-6 rounded-full bg-primary shadow-secondary inline-block"
        onClick={()=>dispatch({type: layoutActions.TOGGLE_MENU, payload: {toggle: !state.menu.toggle}})}
    >
        <FaShoppingCart className='text-white text-6xl' />
    </button>
}

export default BurgerBtn;