import React from 'react';
import { useDispatch } from 'react-redux';
import {FaTrashAlt} from 'react-icons/fa';

import CartItemQuantity from './cart-item-quntity.jsx';

import { removeItem } from '../../store/slices/cart.js';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    return <li>
        <div className='item-body text-4xl flex items-center justify-between mt-8'>
            <span className='capitalize block font-mont font-light'>{item.product.name}</span>
            <CartItemQuantity item={item} />
        </div>
        <div className='flex justify-between text-primary text-4xl mt-20 border-primary border-b'>
            <div>
                <span className='bd-unit'>$</span>
                <span>{(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
            <FaTrashAlt onClick={()=>dispatch({type: removeItem.type, payload: {item}})} className='text-4xl text-primary' />
        </div>
    </li>
};

CartItem.displayName = 'cart item';

export default CartItem;