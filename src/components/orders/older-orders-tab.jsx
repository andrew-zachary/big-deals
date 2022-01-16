import React from 'react';
import { useSelector } from 'react-redux';

import { allOrders } from '../../store/end-points/order.js';

import OrderItem from './order-item.jsx';
import InfiniteScrollList from '../app/infinite-scroll-list.jsx';

const OlderOrdersTab = () => {
    const {ordersItems, ordersHasMore, ordersLastPage} = useSelector(state=>state.order);
    return <div id='orders-wrapper'>
        <InfiniteScrollList
            endPointOptions={allOrders}
            items={ordersItems} 
            hasMore={ordersHasMore} 
            lastPage={ordersLastPage}
            ItemComponent={OrderItem} 
            pickedMode='orders'
            collectionName='orders'
        />
    </div>
};

OlderOrdersTab.displayName = 'older orders tab';

export default OlderOrdersTab;