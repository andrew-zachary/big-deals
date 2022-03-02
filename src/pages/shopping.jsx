import React, {useState, useEffect, useCallback} from 'react';

import SearchingPanel from '../components/shopping-page/searching-panel.jsx';
import SearchInput from '../components/shopping-page/search-input.jsx';
import ModePickupList from '../components/shopping-page/mode-pickup-list.jsx';
import ListSwitch from '../components/shopping-page/list-switch.jsx';

const ShoppingPage = () => {
    const [startSearch, setStartSearch] = useState({
        show: false,
        value: '',
        mode: ''
    });
    const [showModeList, setShowModeList] = useState('hide');
    const [pickedMode, setPickedMode] = useState('products');
    const handleClickInOut = useCallback((e)=>{
        if(e.target.id === 'mode-picker'){
            setShowModeList('show');
        } else {
            setShowModeList('hide');
        }
    }, []);
    useEffect(()=>{
        document.addEventListener('click', handleClickInOut);
        return ()=>document.removeEventListener('click', handleClickInOut);
    },[]);
    return <div id="shopping-page" className='relative flex flex-col px-4 max-w-screen-sm mx-auto h-full'>
        { startSearch.show && <SearchingPanel pickedMode={pickedMode} startSearch={startSearch} setStartSearch={setStartSearch} /> }
        <SearchInput startSearch={startSearch} setStartSearch={setStartSearch} showModeList={showModeList} pickedMode={pickedMode} />
        <ModePickupList showModeList={showModeList} setPickedMode={setPickedMode} />
        <ListSwitch pickedMode={pickedMode} />
    </div>
};

export default ShoppingPage;