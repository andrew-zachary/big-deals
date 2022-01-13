import React from 'react';
import { useSelector } from 'react-redux';

import { allOrders } from '../../store/end-points/order.js';

import OrderItem from './order-item.jsx';
import InfiniteScrollList from '../app/infinite-scroll-list.jsx';

const AllOrdersTab = () => {
    const {ordersItems, ordersHasMore, ordersLastPage} = useSelector(state=>state.order);
    return <div id='orders-wrapper'>
        {ordersItems.length === 0 && <h1 className='font-ssp font-regular text-3xl mt-4'>no orders found ...</h1>}
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

AllOrdersTab.displayName = 'all orders tab';

export default AllOrdersTab;