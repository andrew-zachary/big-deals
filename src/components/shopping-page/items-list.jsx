import React from 'react';
import { useSelector } from 'react-redux';
import {getAllDeals} from '../../store/end-points/deal.js';
import {getAllProducts} from '../../store/end-points/product.js';
import DealListItem from './deal-list-item.jsx';
import ProductListItem from './product-list-item.jsx';
import InfiniteScrollList from '../app/infinite-scroll-list.jsx';

const ItemsList = ({pickedMode}) => {
    const {dealsItems, dealsHasMore, dealsLastPage} = useSelector(state=>state.deal);
    const {productsItems, productsHasMore, productsLastPage} = useSelector(state=>state.product);
    return <>
        { pickedMode === 'deals' && <InfiniteScrollList
            endPointOptions={getAllDeals}
            items={dealsItems} 
            hasMore={dealsHasMore} 
            lastPage={dealsLastPage}
            ItemComponent={DealListItem} />
        }
        { pickedMode === 'products' && <InfiniteScrollList
            endPointOptions={getAllProducts}
            items={productsItems} 
            hasMore={productsHasMore} 
            lastPage={productsLastPage}
            ItemComponent={ProductListItem} />
        }
    </>
};

export default ItemsList;