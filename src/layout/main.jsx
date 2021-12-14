import React from 'react';
import {Outlet} from 'react-router-dom';
import LayoutFooter from './footer.jsx';
import LayoutHeader from './header.jsx';
import LayoutSideMenu from './side-menu.jsx';
import LayoutDim from './layout-dim.jsx';

const MainLayout = () => {
    return <div id='layout-wraper' className='flex relative'>
        <LayoutSideMenu />
        <LayoutDim />
        <div id='bd-app-body'>
            <div id='body-container' className='grid grid-rows-layout absolute w-full'>
                <LayoutHeader />
                <main id='main-content'>
                    <Outlet />
                </main>
                <LayoutFooter />
            </div>
        </div>
    </div>
}

export default MainLayout;