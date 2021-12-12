import React from 'react';
import {Outlet} from 'react-router-dom';
import LayoutFooter from './footer.jsx';
import LayoutHeader from './header.jsx';

const MainLayout = () => {
    return <>
        <LayoutHeader />
            <section id="main-container">
                <Outlet />
            </section>
        <LayoutFooter />
    </>
}

export default MainLayout;