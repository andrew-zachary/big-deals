import React from 'react';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';

import { addItem } from '../../store/slices/cart.js';

const AddDealCart = ({item}) => {
    const dispatch = useDispatch();
    let dealCost = 0;
    let discountPrice = 0;
    const dealDiscountPrice = () => {
        item.products.forEach((product)=>{
            dealCost += product.price;
        });
        discountPrice = dealCost*(item.discount/100);
        return (dealCost - discountPrice).toFixed(2);
    };
    const clickHandler = (item) => {
        dispatch( {type: addItem.type, payload: {
            item:{...item, price: (dealCost - discountPrice), collection: 'deals'}, 
            collection: 'deals'}} );
    }
    return <button onClick={()=>clickHandler(item)} className='mt-8 font-ssp font-regular bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] flex items-center justify-around w-full max-w-[28rem] mx-auto'>
        <span className='text-4xl capitalize'>for</span>
        <div className='text-5xl font-ssp font-medium'>
            <span>{dealDiscountPrice()}</span>
            <span className='bd-unit'>$</span>
        </div>
        <FaCartPlus className='text-white text-5xl' />
    </button>
}

AddDealCart.displayName = 'add deal cart btn';

export default AddDealCart;