import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LayoutFooter from './footer.jsx';
import LayoutHeader from './header.jsx';
import LayoutSideMenu from './side-menu.jsx';
import LayoutDim from './layout-dim.jsx';

const MainLayout = () => {
    const footerToggle = useSelector(state=>state.app.footer);
    const layout = 'grid grid-rows-layout absolute w-full';
    const noFooterLayout = 'grid grid-rows-no-footer-layout absolute w-full';
    return <div id='layout-wraper' className='flex relative'>
        <LayoutSideMenu />
        <LayoutDim />
        <div id='bd-app-body'>
            <div id='body-container' className={footerToggle?layout:noFooterLayout}>
                <LayoutHeader />
                <main id='main-content' className='max-h-[80rem] self-center'>
                    <Outlet />
                </main>
                <LayoutFooter footerToggle={footerToggle} />
            </div>
        </div>
    </div>
};

export default MainLayout;