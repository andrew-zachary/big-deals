import React from 'react';

import { useDispatch } from 'react-redux';
import { range } from 'lodash-es';

import { changeItemQuantity } from '../../store/slices/cart.js';

import ChooseList from '../app/choose-list.jsx';

const CartProductQuantity = ({item}) => {
    const picks = range(1, 31);
    const dispatch = useDispatch();
    const quantityChangeHandler = (pick) => {
        dispatch({type: changeItemQuantity.type, payload: {item, pick, collection:'products'}});
    }
    return <ChooseList value={item.quantity} picks={picks} pickAction={quantityChangeHandler} />
};

CartProductQuantity.displayName = 'cart product quantity';

export default CartProductQuantity;