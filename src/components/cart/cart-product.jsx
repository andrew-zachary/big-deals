import React from 'react';
import { useDispatch } from 'react-redux';
import {FaTrashAlt} from 'react-icons/fa';

import CartProductQuantity from './cart-product-quntity.jsx';

import { removeProduct } from '../../store/slices/cart.js';

const CartProductItem = ({item}) => {
    const dispatch = useDispatch();
    return <li>
        <div className='item-body text-4xl flex items-center justify-between mt-8'>
            <span className='capitalize block font-mont font-light'>{item.product.name}</span>
            <CartProductQuantity item={item} />
        </div>
        <div className='flex justify-between text-primary text-4xl mt-20 border-primary border-b'>
            <div>
                <span className='bd-unit'>$</span>
                <span>{(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
            <FaTrashAlt onClick={()=>dispatch({type: removeProduct.type, payload: {item}})} className='cursor-pointer text-4xl text-primary' />
        </div>
    </li>
};

CartProductItem.displayName = 'cart product item';

export default CartProductItem;