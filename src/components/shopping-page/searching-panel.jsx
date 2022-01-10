import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { searchAllProducts } from '../../store/end-points/product.js';
import { searchAllDeals } from '../../store/end-points/deal.js';

import InfiniteScrollList from '../app/infinite-scroll-list.jsx';
import ProductListItem from './product-list-item.jsx';
import DealListItem from './deal-list-item.jsx';

const SearchingPanel = ({startSearch, setStartSearch}) => {
    const {productsSearch} = useSelector(state=>state.product);
    const {dealsSearch} = useSelector(state=>state.deal);
    return <div id="searching-panel" className='absolute top-0 left-0 py-8 px-4 w-full h-full bg-white z-9997'>
        <div id="header" className='flex justify-end'>
            <FaTimes onClick={()=>setStartSearch({
                ...startSearch,
                show: false,
            })} className='text-6xl text-primary cursor-pointer' />
        </div>
        { startSearch.mode === 'deals' && <InfiniteScrollList 
            endPointOptions={searchAllDeals}
            items={dealsSearch.items} 
            hasMore={dealsSearch.hasMore} 
            lastPage={dealsSearch.lastPage}
            ItemComponent={DealListItem} 
            pickedMode='search'
            params={{s:startSearch.value}}
        /> }
        { startSearch.mode === 'products' && <InfiniteScrollList 
            endPointOptions={searchAllProducts}
            items={productsSearch.items} 
            hasMore={productsSearch.hasMore} 
            lastPage={productsSearch.lastPage}
            ItemComponent={ProductListItem} 
            pickedMode='search'
            params={{s:startSearch.value}}
        /> }
    </div>
};

SearchingPanel.displayName = 'searching';

export default SearchingPanel;