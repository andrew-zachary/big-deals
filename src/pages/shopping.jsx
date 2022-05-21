import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { resetProductsSearch } from '../store/slices/product.js';
import { resetDealsSearch } from '../store/slices/deal.js';

import SearchingPanel from '../components/shopping-page/searching-panel.jsx';
import SearchInput from '../components/shopping-page/search-input.jsx';
import ListSwitch from '../components/shopping-page/list-switch.jsx';

import useClickInOut from '../hooks/clickInOut.js';

const ShoppingPage = () => {
    const dispatch = useDispatch();
    const [triggerClicked] = useClickInOut('pick-mode-trigger', document);
    const [pickedMode, setPickedMode] = useState('products');
    const [autoComplete, startAutoComplete] = useState(false);
    const [startSearch, setStartSearch] = useState({
        show: false,
        value: '',
        mode: ''
    });
    const autoCompleteHandler = (searchTxt) => {
        if(searchTxt.length >= 3) {
            startAutoComplete(true);
        } else {
            startAutoComplete(false);
        }
    }
    const searchHandler = (searchTxt) => {
        //close auto-complete-panel
        startAutoComplete(false);
        //if no text return
        if(searchTxt === '') return;
        //if searchTxt changed reset search and start new searching
        if(startSearch.value !== searchTxt) {
            dispatch({type: resetProductsSearch.type});
            dispatch({type: resetDealsSearch.type});
            setStartSearch({
                show: true, 
                value: searchTxt, 
                mode: pickedMode
            });
        //else show last result
        } else {
            setStartSearch((value)=>({...value, show:true}));
        }
    };
    const resetSearchHandler = () => {
        dispatch({type: resetProductsSearch.type});
        dispatch({type: resetDealsSearch.type});
        setStartSearch({
            show: false,
            value: '',
            mode: ''
        });
    }

    return <div id="shopping-page" className='relative flex flex-col px-4 max-w-screen-sm mx-auto h-full'>
        { startSearch.show && <SearchingPanel pickedMode={pickedMode} startSearch={startSearch} setStartSearch={setStartSearch} /> }
        <SearchInput 
            searchHandler={searchHandler} 
            showModeList={triggerClicked} 
            pickedMode={pickedMode} 
            setPickedMode={setPickedMode}
            autoComplete={autoComplete}
            autoCompleteHandler={autoCompleteHandler}
            resetSearchHandler={resetSearchHandler}
        />
        <ListSwitch pickedMode={pickedMode} />
    </div>
};

export default ShoppingPage;