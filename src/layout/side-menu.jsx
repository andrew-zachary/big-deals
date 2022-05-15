import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import MenuCloseBtn from '../components/side-menu/close-btn.jsx';
import LoginCartBtn from '../components/side-menu/login-cart-btn.jsx';
import SideMenuTabs from '../components/side-menu/side-menu-tabs.jsx';

const LayoutSideMenu = () => {
    const {isAuthed, userInfo} = useSelector(state=>state.user);
    const {toggle, toAuth} = useSelector(state=>state.app.sideMenu);
    const [currentPage, setCurrentPage] = useState('');
    const navRef = useRef();
    useEffect(()=>{
        navRef.current.style.width = toggle?`${100}%`:`${0}px`;
        if(toAuth) {
            setCurrentPage('user');
        }
    }, [toggle]);
    return <nav id="bd-app-nav" className='relative max-w-lg z-9998' ref={navRef}>
        <header className='flex items-center justify-between'>
            <LoginCartBtn currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MenuCloseBtn />
        </header>
        <main className='p-4 text-center overflow-y-scroll h-full grid items-center'>
            <div id='tab'>
                <SideMenuTabs isAuthed={isAuthed} userInfo={userInfo} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </main>
    </nav>
};

LayoutSideMenu.displayName = 'layout side menu';

export default LayoutSideMenu;