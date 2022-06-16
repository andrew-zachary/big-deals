import React, {useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { FaSearch, FaSortDown } from 'react-icons/fa';

const SearchInput = ({debouncedNewSearch, showModeList, pickedMode, setPickedMode, setStartSearch}) => {
    const {t} = useTranslation();
    const {searchStr} = useSelector(state=>state.app.temp);
    const searchTxt = useRef('');
    const pickingModes = [
        {value: 'shopping.search.modes.deals', header: t('shopping.search.deals.header'), desc: t('shopping.search.deals.desc')},
        {value: 'shopping.search.modes.products', header: t('shopping.search.products.header'), desc: t('shopping.search.products.desc')}
    ];

    useEffect(()=> {
        searchTxt.current.value = searchStr;
        setStartSearch({
            value: searchStr,
            mode: pickedMode
        });
    }, []);

    return <div id="search-input" className='w-full flex flex-col'>
        <div id="search-input-ctrls" className='w-full flex'>
            <button id="pick-mode-btn" type="button" className="pick-mode-trigger relative border-y-2 border-primary dark:border-primary-dark dark:bg-[#1e293b]">
                <div id="mode-picker" className="pick-mode-trigger absolute h-full w-full"></div>
                <FaSortDown className='pick-mode-trigger cursor-pointer text-primary dark:text-primary-dark text-4xl mt-[-1rem]' />
            </button>
            <input 
                ref={searchTxt} 
                id="search-text" 
                type="text" 
                placeholder={`${showModeList?'...':t('shopping.search.label')+' '+t(pickedMode)}`}
                className='bd-font-base focus:outline-none text-4xl w-4/5 capitalize border-y-2 border-primary dark:border-primary-dark dark:bg-[#1e293b]'
                onKeyDown={(e)=> e.key === 'Enter'?debouncedNewSearch:null}
                onInput={debouncedNewSearch}
            />
            <div id="search-btn" className='bd-btn-icon-center w-1/5 bg-primary-bg dark:bg-[#1e293b] rounded-r-2xl py-6 text-center'>
                <FaSearch className='text-4xl text-primary dark:text-primary-dark inline-block' />
            </div>
        </div>
        {
            showModeList && <ul id='mode-pickup-list' className='w-full block border-primary dark:border-primary-dark border-x border-b-4'>
                {
                    pickingModes.map(mode => {
                        return <li key={mode.value} className="cursor-pointer mt-4 capitalize hover:bg-primary dark:hover:bg-primary-dark hover:text-white" onClick={()=>setPickedMode(mode.value)}>
                            <h1 className="text-3xl bd-font-compo">{mode.header}</h1>
                            <h2 className="text-2xl bd-font-base">{mode.desc}</h2>
                        </li>
                    })
                }
            </ul>
        }
    </div>
};

export default SearchInput;