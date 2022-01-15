import React, { useState } from 'react';

import ChooseList from '../components/app/choose-list.jsx';

const Settings = () => {
    const [prefLang, setPrefLang] = useState('select');
    const save = () => {
        console.log(prefLang);
    };
    return <>
        <div className='setting-panel text-4xl capitalize font-ssp font-regular'>
            <div className='label'>preferred language</div>
            <div className='chooseListPick inline-block mt-8'>
                <ChooseList value={prefLang} picks={['english', 'العربية']} pickAction={setPrefLang} />
            </div>
        </div>
        <button onClick={()=> save()} className='text-4xl text-white font-ssp font-light capitalize bg-primary p-3 mt-8 rounded-[0.4rem] w-full'>save</button>
    </>
};

export default Settings;