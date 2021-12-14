import React, {useEffect, useContext, useRef} from 'react';
import { layoutContext, layoutActions } from './context.js';

const LayoutSideMenu = () => {
    const {state, dispatch} = useContext(layoutContext);
    const navRef = useRef();
    useEffect(()=>{
        navRef.current.style.width = state.menu.toggle?`${100}%`:`${0}px`;
    }, [state.menu.toggle]);
    return <nav id="bd-app-nav" className='relative max-w-lg z-9999 overflow-hidden bg-white' ref={navRef}>
        <p>nav</p>
        <button onClick={()=>dispatch({type: layoutActions.TOGGLE_MENU, payload: !state.menu.toggle})}>close</button>
    </nav>
}

export default LayoutSideMenu;