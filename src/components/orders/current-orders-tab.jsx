import React from 'react';
import { useSelector } from 'react-redux';

import OrderItem from './order-item.jsx';

const CurrentOrdersTab = () => {
    const {currentOrders} = useSelector(state=>state.order);
    return <div id='orders-wrapper'>
        <ul mode='orders' className='my-8 overflow-y-scroll h-full'>
            {
                currentOrders.map(order=>{
                    return <OrderItem key={order._id} item={order} />
                })
            }
        </ul>
        {
            currentOrders.length === 0 && <div id='no-current-orders' className='w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-center capitalize font-mont font-bold'>
                no new orders ...
            </div>
        }
    </div>
};

CurrentOrdersTab.displayName = 'current orders tab';

export default CurrentOrdersTab;