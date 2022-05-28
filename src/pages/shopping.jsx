import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash-es';

import SearchingPanel from '../components/shopping-page/searching-panel.jsx';
import SearchInput from '../components/shopping-page/search-input.jsx';

import { resetDealsSearch } from '../store/slices/deal.js';
import { resetProductsSearch } from '../store/slices/product.js';
import { searchStarted } from '../store/slices/app.js';

import useClickInOut from '../hooks/clickInOut.js';

const ShoppingPage = () => {
    const dispatch = useDispatch();
    const [triggerClicked] = useClickInOut('pick-mode-trigger', document);
    const [pickedMode, setPickedMode] = useState('products');
    const [newMount, setNewMount] = useState('');
    const [startSearch, setStartSearch] = useState({
        value: '',
        mode: ''
    });
    const newSearch = (e) => {
        let searchStr = e.target.value;
        dispatch({type: resetDealsSearch.type});
        dispatch({type: resetProductsSearch.type});
        dispatch({type: searchStarted.type, payload: {searchStr}});
        setStartSearch({
            value: searchStr,
            mode: ''
        });
        setNewMount(Date.now());
    };
    const debouncedNewSearch = useMemo(() => debounce(newSearch, 1000), []);

    useEffect(() => {
        return () => {
            debouncedNewSearch.cancel();
        }
    }, []);

    return <div id="shopping-page" className='relative flex flex-col px-4 max-w-screen-sm mx-auto h-full'>
        <SearchInput 
            debouncedNewSearch={debouncedNewSearch} 
            showModeList={triggerClicked} 
            pickedMode={pickedMode} 
            setPickedMode={setPickedMode}
            setStartSearch={setStartSearch}
        />
        <SearchingPanel key={newMount} pickedMode={pickedMode} startSearch={startSearch} />
    </div>
};

export default ShoppingPage;