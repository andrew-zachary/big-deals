import React from 'react';

const CartItem = ({item}) => {
    return <li>
        <div className='item-body text-4xl flex mt-8'>
            <span className='capitalize block'>{item.product.name}</span>
            <span className='mx-4'>x</span>
            <span>{item.quantity}</span>
        </div>
        <div className='flex justify-end text-primary text-4xl mt-8 border-primary border-b'>
            <span className='bd-unit'>$</span>
            <span>{(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
    </li>
};

CartItem.displayName = 'cart item';

export default CartItem;