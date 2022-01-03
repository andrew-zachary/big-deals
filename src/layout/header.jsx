import React from 'react';
import MenuBtn from './menu-btn.jsx';
import CartSummary from '../components/cart/summary.jsx';

const LayoutHeader = () => {
    return <header>
        <div className='max-w-screen-md mx-auto flex items-center justify-between h-full'>
            <MenuBtn />
            <CartSummary />
        </div>
    </header>
}

LayoutHeader.displayName = "app header";

export default LayoutHeader;