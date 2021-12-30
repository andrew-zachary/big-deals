import React, {useState, useEffect, useContext, useRef} from 'react';
import { layoutContext, layoutActions } from './context.js';

import MenuCloseBtn from '../components/side-menu/close-btn.jsx';
import LoginCartBtn from '../components/side-menu/login-cart-btn.jsx';
import SideMenuTabs from '../components/side-menu/side-menu-tabs.jsx';

const LayoutSideMenu = () => {
    const [currentForm, setCurrentForm] = useState('cart');
    const {state, dispatch} = useContext(layoutContext);
    const navRef = useRef();
    useEffect(()=>{
        navRef.current.style.width = state.menu.toggle?`${100}%`:`${0}px`;
    }, [state.menu.toggle]);
    return <nav id="bd-app-nav" className='relative max-w-lg z-9999 bg-white' ref={navRef}>
        <header className='flex items-center justify-between'>
            <LoginCartBtn currentForm={currentForm} setCurrentForm={setCurrentForm} />
            <MenuCloseBtn state={state} dispatch={dispatch} layoutActions={layoutActions} />
        </header>
        <main className='p-4 text-center overflow-y-scroll h-full grid items-center'>
            <div id='tab'>
                <SideMenuTabs currentForm={currentForm} setCurrentForm={setCurrentForm} />
            </div>
        </main>
    </nav>
};

LayoutSideMenu.displayName = 'layout side menu';

export default LayoutSideMenu;