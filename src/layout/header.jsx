import React from 'react';
import BurgerBtn from './burger-btn.jsx';

const LayoutHeader = () => {
    return <header>
        <div className='max-w-app-body mx-auto flex items-center h-full'>
            <BurgerBtn />
        </div>
    </header>
}

export default LayoutHeader;