import React, {useState} from 'react';

import SearchingPanel from '../components/shopping-page/searching-panel.jsx';
import SearchInput from '../components/shopping-page/search-input.jsx';
import ModePickupList from '../components/shopping-page/mode-pickup-list.jsx';
import ListSwitch from '../components/shopping-page/list-switch.jsx';

import useClickInOut from '../hooks/clickInOut.js';

const ShoppingPage = () => {
    const [startSearch, setStartSearch] = useState({
        show: false,
        value: '',
        mode: ''
    });
    
    const [triggerClicked] = useClickInOut('pick-mode-trigger', document);
    const [pickedMode, setPickedMode] = useState('products');

    return <div id="shopping-page" className='relative flex flex-col px-4 max-w-screen-sm mx-auto h-full'>
        { startSearch.show && <SearchingPanel pickedMode={pickedMode} startSearch={startSearch} setStartSearch={setStartSearch} /> }
        <SearchInput startSearch={startSearch} setStartSearch={setStartSearch} showModeList={triggerClicked} pickedMode={pickedMode} />
        <ModePickupList showModeList={triggerClicked} setPickedMode={setPickedMode} />
        <ListSwitch pickedMode={pickedMode} />
    </div>
};

export default ShoppingPage;