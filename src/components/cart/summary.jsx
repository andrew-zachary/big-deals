import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'

const CartSummary = () => {
    return <section id='cart-summary' className='bd-unit'>
        <div className='flex flex-col items-center w-full'>
            <div className='flex items-center'>
                <FaShoppingCart className='text-6xl text-primary' />
                <div className='relative p-6 bg-primary rounded-full'>
                    <span className='text-3xl text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>0</span>
                </div>
            </div>
            <div className='text-4xl flex items-center font-mont font-medium'>
                <span>$</span>
                <span className='bd-unit'>0</span>
            </div>
        </div>
    </section>
};

CartSummary.displayName = "cart summary";

export default CartSummary;