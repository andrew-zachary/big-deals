import React from 'react';
import BurgerBtn from './burger-btn.jsx';
import CartSummary from '../components/cart/summary.jsx';

const LayoutHeader = () => {
    return <header>
        <div className='max-w-app-body mx-auto flex items-center h-full'>
            <BurgerBtn />
            <CartSummary />
        </div>
    </header>
}

export default LayoutHeader;