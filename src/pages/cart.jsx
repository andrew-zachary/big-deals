import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { layoutActions } from '../layout/context.js';
import { createNewOrder } from '../store/end-points/order.js';
import { apiStartCall } from '../store/actions.js';
import { confirmModalToggled } from '../store/slices/app.js';

import CartProduct from '../components/cart/cart-product.jsx';
import CartDeal from '../components/cart/cart-deal.jsx';

const CartTab = ({isAuthed, setCurrentPage}) => {
    const dispatch = useDispatch();
    const {items, totalCost} = useSelector(state=>state.cart);
    const saveOrder = (items) => {
        const deals = items.deals.map((item)=> {
            return {
                dealId:item.entity._id,
                quantity: item.quantity
            }
        });
        const products = items.products.map((item)=> {
            return {
                productId:item.entity._id,
                quantity: item.quantity
            }
        });
        if(!isAuthed) {
            setCurrentPage('user');
        } else {
            dispatch({
                type: confirmModalToggled.type,
                payload: {
                    text: {
                        header: 'send order',
                        body: 'would you like to submit your current cart ?'
                    },
                    toggle: true,
                    toConfirm: {
                        payload: {type: apiStartCall.type, payload: createNewOrder(null, null, {items: [...deals, ...products]} )}
                    }
                }
            });
        }
    }
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
        <button onClick={()=> saveOrder(items)} className='text-4xl text-white font-ssp font-light capitalize bg-primary p-3 mt-8 rounded-[0.4rem] w-full' disabled={(items.products.length + items.deals.length) === 0}>submit order</button>
    </>
};

CartTab.displayName = 'cart tab';

export default CartTab;