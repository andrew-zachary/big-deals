import React from 'react';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';

import { addItem } from '../../store/slices/cart.js';

const AddProductCart = ({item}) => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch({ type: addItem.type, payload:{item, collection: 'products'} });
    };
    return <button onClick={()=>clickHandler()} className='p-4 bg-primary shadow-secondary rounded-full'>
        <FaCartPlus className='text-white text-5xl' />
    </button>
};

AddProductCart.displayName = 'add product cart btn';

export default AddProductCart;