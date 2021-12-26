import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../components/cart/cart-item.jsx';

const CartTab = () => {
    const {cartsItems, totalItemsCost} = useSelector(state=>state.cart);
    return <>
        {cartsItems.length === 0 && <h1 className='text-4xl capitalize font-mont font-medium'>fill your cart ...</h1>}
        <ul>
            {
                cartsItems.map(item=>{
                    return <CartItem key={item.product._id} item={item} />
                })
            }
        </ul>
        <div className='text-4xl text-primary pt-8'>
            <span>$</span>
            <span>{totalItemsCost.toFixed(2)}</span>
        </div>
        <div className='flex justify-between mt-8'>
            <button className='text-4xl bg-primary text-white px-3 py-4 rounded-[0.4rem] font-ssp font-light capitalize' disabled={cartsItems.length === 0}>save cart</button>
            <button className='text-4xl bg-primary text-white px-3 py-2 rounded-[0.4rem] font-ssp font-light capitalize' disabled={cartsItems.length === 0}>submit order</button>
        </div>
    </>
};

CartTab.displayName = 'cart tab';

export default CartTab;