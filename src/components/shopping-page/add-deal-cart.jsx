import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import AuthedActionBtn from '../app/authed-action-btn.jsx';

import { addItem } from '../../store/slices/cart.js';

const AddDealCart = ({item}) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=>{
        let dealCost = 0;
        let discountPrice = 0;
        item.products.forEach((product)=>{
            dealCost += product.price;
        });
        discountPrice = dealCost*(item.discount/100);
        setTotalPrice(dealCost - discountPrice);
    }, [item]);
    return <AuthedActionBtn
        active={false}
        action={dispatch} 
        payload={ {type: addItem.type, payload: {
            item:{...item, price: totalPrice, collection: 'deals'}, 
            collection: 'deals'}} }
        tailWindStyle='mt-8 font-regular bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] flex items-center justify-around w-full max-w-[28rem] mx-auto'
    >
        <span className='bd-font-base text-4xl capitalize'>{t('shopping.item.for')}</span>
        <div className='bd-font-base text-5xl font-medium'>
            <span>{totalPrice.toFixed(2)}</span>
            <span className='bd-unit'>$</span>
        </div>
        <FaCartPlus className='text-white text-5xl' />
    </AuthedActionBtn>
};

AddDealCart.displayName = 'add deal cart btn';

export default AddDealCart;