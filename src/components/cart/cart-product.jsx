import React from 'react';
import { useDispatch } from 'react-redux';
import {FaTrashAlt} from 'react-icons/fa';

import CartProductQuantity from './cart-product-quntity.jsx';

import { removeItem } from '../../store/slices/cart.js';

const CartProductItem = ({item}) => {
    const dispatch = useDispatch();
    return <li>
        <div className='item-body text-4xl flex items-center justify-between mt-8'>
            <span className='capitalize block font-light'>{item.entity.name}</span>
            <CartProductQuantity item={item} />
        </div>
        <div className='flex justify-between text-primary dark:text-primary-dark text-4xl mt-20 border-primary dark:border-primary-dark border-b'>
            <div>
                <span className='bd-unit'>$</span>
                <span>{(item.entity.price * item.quantity).toFixed(2)}</span>
            </div>
            <FaTrashAlt onClick={()=>dispatch({type: removeItem.type, payload: {item, collection: 'products'}})} className='cursor-pointer text-4xl text-primary dark:text-primary-dark' />
        </div>
    </li>
};

CartProductItem.displayName = 'cart product item';

export default CartProductItem;