import React, {useState, useEffect, useCallback} from 'react';
import SearchInput from '../components/shopping-page/search-input.jsx';
import ModePickupList from '../components/shopping-page/mode-pickup-list.jsx';

const ShoppingPage = () => {
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
        document.addEventListener('click', handleClickInOut);
        return ()=>document.removeEventListener('click', handleClickInOut);
    },[]);
    return <div id="shopping-page" className='flex flex-col items-center px-4 max-w-screen-sm mx-auto'>
        <SearchInput showModeList={showModeList} pickedMode={pickedMode} />
        <ModePickupList showModeList={showModeList} setPickedMode={setPickedMode} />
    </div>
};

export default ShoppingPage;