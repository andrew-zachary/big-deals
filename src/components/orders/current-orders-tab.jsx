import React from 'react';
import { useSelector } from 'react-redux';

import OrderItem from './order-item.jsx';

const CurrentOrdersTab = () => {
    const {currentOrders} = useSelector(state=>state.order);
    return <div id='orders-wrapper'>
        <ul mode='orders' className='my-8 overflow-y-scroll'>
            {
                currentOrders.map(order=>{
                    return <OrderItem item={order} />
                })
            }
        </ul>
    </div>
};

CurrentOrdersTab.displayName = 'current orders tab';

export default CurrentOrdersTab;