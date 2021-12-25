import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
    const {totalItemsNumber, totalItemsCost} = useSelector(state=>state.cart);
    return <section id='cart-summary' className='bd-unit'>
        <div className='flex items-center w-full'>
            <div className='flex items-center'>
                <div className='relative p-6 bg-primary rounded-full'>
                    <span className='text-3xl text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>{totalItemsNumber}</span>
                </div>
            </div>
            <div className='bd-unit'>
                <div className='bg-primary text-white text-4xl px-8 py-4 flex items-center font-mont font-medium rounded-full'>
                    <span>$</span>
                    <span className='bd-unit'>{totalItemsCost.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </section>
};

CartSummary.displayName = "cart summary";

export default CartSummary;