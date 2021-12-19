import React from 'react';
import { useSelector } from 'react-redux';
import {getAllDeals} from '../../store/end-points/deal.js'
import DealListItem from './deal-list-item.jsx';
import InfiniteScrollList from '../app/infinite-scroll-list.jsx';

const ItemsList = () => {
    const {items, hasMore, lastPage} = useSelector(state=>state.deal);
    return <InfiniteScrollList
        endPointOptions={getAllDeals}
        items={items} 
        hasMore={hasMore} 
        lastPage={lastPage}
        ItemComponent={DealListItem} />
};

export default ItemsList;