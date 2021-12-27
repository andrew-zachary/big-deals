import React from 'react';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';

import { addProduct } from '../../store/slices/cart.js';

const AddProductCart = ({item}) => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch({ type: addProduct.type, payload:{item} });
    };
    return <button onClick={()=>clickHandler()} className='p-4 bg-primary shadow-secondary rounded-full'>
        <FaCartPlus className='text-white text-5xl' />
    </button>
};

AddProductCart.displayName = 'add product cart';

export default AddProductCart;