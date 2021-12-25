import React, {useState, useEffect, useCallback} from 'react';
import SearchInput from '../components/shopping-page/search-input.jsx';
import ModePickupList from '../components/shopping-page/mode-pickup-list.jsx';
import ListSwitch from '../components/shopping-page/list-switch.jsx';

const ShoppingPage = () => {
    const [showModeList, setShowModeList] = useState('hide');
    const [pickedMode, setPickedMode] = useState('products');
    const handleClickInOut = useCallback((e)=>{
        if(e.target.id === 'search-text'){
            setShowModeList('show');
        } else {
            setShowModeList('hide');
        }
    }, []);
    useEffect(()=>{
        document.addEventListener('click', handleClickInOut);
        return ()=>document.removeEventListener('click', handleClickInOut);
    },[]);
    return <div id="shopping-page" className='flex flex-col px-4 max-w-screen-sm mx-auto h-full'>
        <SearchInput showModeList={showModeList} pickedMode={pickedMode} />
        <ModePickupList showModeList={showModeList} setPickedMode={setPickedMode} />
        <ListSwitch pickedMode={pickedMode} />
    </div>
};

export default ShoppingPage;