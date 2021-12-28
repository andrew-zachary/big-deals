import React from 'react';
import { useSelector } from 'react-redux';

import CartProduct from '../components/cart/cart-product.jsx';
import CartDeal from '../components/cart/cart-deal.jsx';

const CartTab = () => {
    const {items, totalCost} = useSelector(state=>state.cart);
    return <>
        <div id="cart-deals" className='mt-8'>
            <h1 className='text-5xl capitalize font-mont font-medium'>deals</h1>
            {items.deals.length === 0 && <h2 className='text-3xl capitalize font-mont font-light mt-4'>new deals eveyday</h2>}
            <ul>
                {
                    items.deals.map(item=>{
                        return <CartDeal key={item.entity._id} item={item} />
                    })
                }
            </ul>
        </div>
        <div id="cart-products" className='mt-8'>
            <h1 className='text-5xl capitalize font-mont font-medium'>products</h1>
            {items.products.length === 0 && <h2 className='text-3xl capitalize font-mont font-light mt-4'>big collection waiting you</h2>}
            <ul>
                {
                    items.products.map(item=>{
                        return <CartProduct key={item.entity._id} item={item} />
                    })
                }
            </ul>
        </div>
        <div className='text-4xl text-primary pt-8'>
            <span>$</span>
            <span>{(totalCost.products+totalCost.deals).toFixed(2)}</span>
        </div>
        <div className='flex justify-between mt-8'>
            <button className='text-4xl bg-primary text-white px-3 py-4 rounded-[0.4rem] font-ssp font-light capitalize' disabled={items.products.length === 0}>save cart</button>
            <button className='text-4xl bg-primary text-white px-3 py-2 rounded-[0.4rem] font-ssp font-light capitalize' disabled={items.products.length === 0}>submit order</button>
        </div>
    </>
};

CartTab.displayName = 'cart tab';

export default CartTab;