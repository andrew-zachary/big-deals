import React from 'react';

import { useDispatch } from 'react-redux';
import { range } from 'lodash-es';

import { changeItemQuantity } from '../../store/slices/cart.js';

import ChooseList from '../app/choose-list.jsx';

const CartDealQuantity = ({item}) => {
    const picks = range(1, 31);
    const dispatch = useDispatch();
    const quantityChangeHandler = (pick) => {
        dispatch({type: changeItemQuantity.type, payload: {item, pick, collection:'deals'}});
    }
    return <ChooseList value={item.quantity} picks={picks} pickAction={quantityChangeHandler} />
};

CartDealQuantity.displayName = 'cart deal quantity';

export default CartDealQuantity;