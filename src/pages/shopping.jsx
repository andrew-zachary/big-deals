import React, {useState, useEffect, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { apiStartCall } from '../store/actions.js';
import { getAllDeals } from '../store/end-points/deal.js';
import SearchInput from '../components/shopping-page/search-input.jsx';
import ModePickupList from '../components/shopping-page/mode-pickup-list.jsx';
import ItemsList from '../components/shopping-page/items-list.jsx';

const ShoppingPage = () => {
    const dispatch = useDispatch();
    const [showModeList, setShowModeList] = useState('hide');
    const [pickedMode, setPickedMode] = useState('deals');
    const handleClickInOut = useCallback((e)=>{
        if(e.target.id === 'search-text'){
            setShowModeList('show');
        } else {
            setShowModeList('hide');
        }
    }, []);
    useEffect(()=>{
        dispatch({type: apiStartCall.type, payload: getAllDeals()});
        document.addEventListener('click', handleClickInOut);
        return ()=>document.removeEventListener('click', handleClickInOut);
    },[]);
    return <div id="shopping-page" className='flex flex-col px-4 max-w-screen-sm mx-auto h-full'>
        <SearchInput showModeList={showModeList} pickedMode={pickedMode} />
        <ModePickupList showModeList={showModeList} setPickedMode={setPickedMode} />
        <ItemsList />
    </div>
};

export default ShoppingPage;