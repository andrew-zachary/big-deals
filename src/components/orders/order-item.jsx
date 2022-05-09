import React from 'react';
import { format } from 'date-fns';

const OrderItem = ({item}) => {
    return <li className='order mt-8' key={item._id}>
        <div className='order-header flex items-center justify-between'>
            <h1 className='text-3xl'>{format(new Date(item.createdAt), 'yyyy-MM-dd')}</h1>
        </div>
        <div className="order-body mt-4">
            {
                item.items.map((product) => {
                    return <ul key={product._id} className='flex items-center justify-between text-2xl font-ssp font-regular mt-2'>
                        <li>
                            <span>{product.name}</span>
                            <span className='bd-unit'>x</span>
                            <span className='bd-unit'>{product.quantity}</span>
                        </li>
                        <li className='bd-unit bg-primary p-4 text-white'>{(product.quantity * product.price).toFixed(2)}</li>
                    </ul>
                })
            }
        </div>
        <div className='order-footer flex justify-center my-4 p-4 bg-primary font-mont font-regular text-3xl text-white'>
            <span className='capitalize'>total price:</span>
            <span className='bd-unit'>$</span>
            <span className='bd-unit'>{item.totalPrice}</span>
        </div>
    </li>
};

OrderItem.displayName = 'order item (bill)';

export default OrderItem;