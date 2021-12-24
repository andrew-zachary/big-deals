import React, {useContext} from 'react';
import {Outlet} from 'react-router-dom';

import { layoutContext } from './context.js';

import LayoutFooter from './footer.jsx';
import LayoutHeader from './header.jsx';
import LayoutSideMenu from './side-menu.jsx';
import LayoutDim from './layout-dim.jsx';

const MainLayout = () => {
    const {state} = useContext(layoutContext);
    const layout = 'grid grid-rows-layout absolute w-full';
    const noFooterLayout = 'grid grid-rows-no-footer-layout absolute w-full';
    return <div id='layout-wraper' className='flex relative'>
        <LayoutSideMenu />
        <LayoutDim />
        <div id='bd-app-body'>
            <div id='body-container' className={state.footer.show?layout:noFooterLayout}>
                <LayoutHeader />
                <main id='main-content'>
                    <Outlet />
                </main>
                { state.footer.show && <LayoutFooter /> }
            </div>
        </div>
    </div>
};

export default MainLayout;