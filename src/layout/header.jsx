import React from 'react';
import MenuBtn from './menu-btn.jsx';
import CartSummary from '../components/cart/summary.jsx';

const LayoutHeader = () => {
    return <header>
        <div className='max-w-app-body mx-auto flex items-center h-full'>
            <MenuBtn />
            <CartSummary />
        </div>
    </header>
}

LayoutHeader.displayName = "app header";

export default LayoutHeader;