import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const CartSummary = () => {
    const {totalItemsNumber, totalItemsCost} = useSelector(state=>state.cart);
    return <section id='cart-summary' className='bd-unit'>
        <div className='flex items-center w-full'>
            <div className='flex items-center'>
                <div className='relative p-6 bg-primary rounded-full'>
                    <span className='text-3xl text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>{totalItemsNumber}</span>
                </div>
                <FaShoppingCart className='text-6xl text-primary' />
            </div>
            <div className='bd-unit'>
                <div className='text-primary text-5xl flex items-center font-mont font-medium'>
                    <span>$</span>
                    <span className='bd-unit'>{totalItemsCost.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </section>
};

CartSummary.displayName = "cart summary";

export default CartSummary;