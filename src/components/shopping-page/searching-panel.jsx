import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { searchAllProducts } from '../../store/end-points/product.js';

import InfiniteScrollList from '../app/infinite-scroll-list.jsx';
import ProductListItem from './product-list-item.jsx';

const SearchingPanel = ({startSearch, setStartSearch}) => {
    const {searchHasMore, searchLastPage, searchItems} = useSelector(state=>state.product);
    return <div id="searching-panel" className='absolute top-0 left-0 py-8 px-4 w-full h-full bg-white z-9997'>
        <div id="header" className='flex justify-end'>
            <FaTimes onClick={()=>setStartSearch({
                ...startSearch,
                show: false,
            })} className='text-6xl text-primary cursor-pointer' />
        </div>
        <InfiniteScrollList 
            endPointOptions={searchAllProducts}
            items={searchItems} 
            hasMore={searchHasMore} 
            lastPage={searchLastPage}
            ItemComponent={ProductListItem} 
            pickedMode='search'
            params={{s:startSearch.value}}
        />
    </div>
};

SearchingPanel.displayName = 'searching';

export default SearchingPanel;