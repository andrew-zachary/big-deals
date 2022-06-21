import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';

import { createNewOrder } from '../store/end-points/order.js';
import { apiStartCall } from '../store/actions.js';
import { confirmModalToggled } from '../store/slices/app.js';

import CartProduct from '../components/cart/cart-product.jsx';
import CartDeal from '../components/cart/cart-deal.jsx';

const CartTab = ({isAuthed, setCurrentPage}) => {
    const {t} = useTranslation();
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
                        header: 'app.confirm.send_order',
                        body: 'app.confirm.submit_cart'
                    },
                    toggle: true,
                    toConfirm: {
                        payload: {type: apiStartCall.type, payload: createNewOrder(null, null, {items: [...deals, ...products]} )}
                    }
                }
            });
        }
    }
    return <div id='main-cart' className='h-full px-2'>
        <SimpleBar>
            <div id="cart-content" className='px-6'>
                <div id="cart-deals" className='mt-8'>
                    <h1 className='bd-font-compo text-5xl capitalize font-medium'>{t('cart.sections.deals.label')}</h1>
                    {items.deals.length === 0 && <h2 className='bd-font-base text-3xl capitalize font-regular mt-4'>{t('cart.sections.deals.desc')}</h2>}
                    <ul>
                        {
                            items.deals.map(item=>{
                                return <CartDeal key={item.entity._id} item={item} />
                            })
                        }
                    </ul>
                </div>
                <div id="cart-products" className='mt-8'>
                    <h1 className='bd-font-compo text-5xl capitalize font-medium'>{t('cart.sections.products.label')}</h1>
                    {items.products.length === 0 && <h2 className='bd-font-base text-3xl capitalize font-regular mt-4'>{t('cart.sections.products.desc')}</h2>}
                    <ul>
                        {
                            items.products.map(item=>{
                                return <CartProduct key={item.entity._id} item={item} />
                            })
                        }
                    </ul>
                </div>
                <div className='text-4xl text-primary dark:text-primary-dark pt-8'>
                    <span>$</span>
                    <span>{(totalCost.products+totalCost.deals).toFixed(2)}</span>
                </div>
                <button onClick={()=> saveOrder(items)} className='bd-font-compo text-4xl text-white font-light capitalize bg-primary dark:bg-primary-dark p-3 mt-8 mb-8 rounded-[0.4rem] w-full' disabled={(items.products.length + items.deals.length) === 0}>{t('cart.submit')}</button>
            </div>
        </SimpleBar>
    </div>
};

CartTab.displayName = 'cart tab';

export default CartTab;