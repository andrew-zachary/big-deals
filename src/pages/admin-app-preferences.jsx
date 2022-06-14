import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { apiStartCall } from '../store/actions.js';
import { userPrefsUpdated } from '../store/slices/user.js';
import { updatePreferences } from '../store/end-points/user.js';

const AdminAppPreferences = () => {
    const dispatch = useDispatch();
    const {mode, lang} = useSelector(state=>state.user.userInfo.appPreferences);
    const modeCheckbox = useRef();
    const langList = useRef();
    const updatePrefs = () => {
        dispatch({type: userPrefsUpdated.type, payload: {data: {lang: langList.current.value, mode: modeCheckbox.current.checked?'dark':'light'}}});
    };
    const saveChanges = () => {
        dispatch({type: apiStartCall.type, payload: updatePreferences(null, null, {lang: langList.current.value, mode: modeCheckbox.current.checked?'dark':'light'})});
    };
    useEffect(()=> {
        modeCheckbox.current.checked = mode === 'dark';
    }, []);
    return <section id='app-preferences' className='p-4 w-full max-w-screen-sm mx-auto'>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-mont capitalize'>switch to dark mode</h1>
            <label className='container-label'>
                <input ref={modeCheckbox} type='checkbox' id='dark-mode' name='dark-mode' onChange={()=>updatePrefs()} />
                <span className="checkmark"></span>
            </label>
        </div>
        <div className='flex justify-between items-center mt-8'>
            <h1 className='text-4xl font-mont capitalize'>choose language</h1>
            <select ref={langList} name='lang' id='lang' defaultValue={lang === 'en'?'en':'ar'} onChange={(e)=>updatePrefs()} className="text-4xl text-white bg-primary dark:bg-primary-dark p-2">
                <option value='en'>en</option>
                <option value='ar'>ar</option>
            </select>
        </div>
        <div id='app-preferences_ctrls' className='flex justify-end mt-12'>
            <button className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>saveChanges()}>save changes</button>
        </div>
    </section>
};

AdminAppPreferences.displayName = 'admin app preferences';

export default AdminAppPreferences;