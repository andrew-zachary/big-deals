import React, { useContext } from 'react';
import { layoutContext, layoutActions } from './context.js';

const BurgerBtn = () => {
    const {state, dispatch} = useContext(layoutContext);
    const hamburgerLine = `h-2 w-14 my-1.5 rounded-full bg-white`;
    return <button
        className="p-8 rounded-full bg-primary shadow-secondary inline-block"
        onClick={()=>dispatch({type: layoutActions.TOGGLE_MENU, payload: {toggle: !state.menu.toggle}})}
    >
        <div id="button-inner" className='flex flex-col justify-center items-center'>
            <div className={hamburgerLine}></div>
            <div className={hamburgerLine}></div>
            <div className={hamburgerLine}></div>
        </div>
    </button>
}

export default BurgerBtn;