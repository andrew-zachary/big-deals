import React from 'react';
import { useDispatch } from 'react-redux';
import {FaTrashAlt} from 'react-icons/fa';

import CartDealQuantity from './cart-deal-quantity.jsx';

import { removeItem } from '../../store/slices/cart.js';

const CartDealItem = ({item}) => {
    const dispatch = useDispatch();
    return <li>
        <div className='item-body text-4xl flex items-center justify-between mt-8'>
            <span className='capitalize block font-light'>{item.entity.name}</span>
            <CartDealQuantity item={item} />
        </div>
        <div className='flex justify-between text-primary text-4xl mt-20 border-primary dark:border-primary-dark border-b'>
            <div>
                <span className='bd-unit dark:text-primary-dark'>$</span>
                <span className='dark:text-primary-dark'>{(item.entity.price * item.quantity).toFixed(2)}</span>
            </div>
            <FaTrashAlt onClick={()=>dispatch({type: removeItem.type, payload: {item, collection: 'deals'}})} className='cursor-pointer text-4xl text-primary dark:text-primary-dark' />
        </div>
    </li>
};

CartDealItem.displayName = 'cart deal item';

export default CartDealItem;