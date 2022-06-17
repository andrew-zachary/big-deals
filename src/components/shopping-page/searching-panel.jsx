import React from 'react';
import { useSelector } from 'react-redux';

import { searchAllProducts } from '../../store/end-points/product.js';
import { searchAllDeals } from '../../store/end-points/deal.js';

import InfiniteScrollList from '../app/infinite-scroll-list.jsx';
import ProductListItem from './product-list-item.jsx';
import DealListItem from './deal-list-item.jsx';

const SearchingPanel = ({pickedMode, startSearch}) => {
    const {productsSearch} = useSelector(state=>state.product);
    const {dealsSearch} = useSelector(state=>state.deal);
    return <div id="searching-panel" className='py-8 w-full h-full bg-primary-bg dark:bg-primary-bg-dark z-9996'>
        { pickedMode === 'shopping.search.modes.deals' && <InfiniteScrollList 
                endPointOptions={searchAllDeals}
                items={dealsSearch.items} 
                hasMore={dealsSearch.hasMore} 
                lastPage={dealsSearch.lastPage}
                ItemComponent={DealListItem} 
                pickedMode='deals'
                params={{s:startSearch.value}}
                collectionName='results'
            /> 
        }
        { pickedMode === 'shopping.search.modes.products' && <InfiniteScrollList 
                endPointOptions={searchAllProducts}
                items={productsSearch.items} 
                hasMore={productsSearch.hasMore} 
                lastPage={productsSearch.lastPage}
                ItemComponent={ProductListItem} 
                pickedMode='products'
                params={{s:startSearch.value}}
                collectionName='results'
            /> 
        }
    </div>
};

SearchingPanel.displayName = 'searching';

export default SearchingPanel;