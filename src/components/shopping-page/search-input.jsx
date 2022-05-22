import React, {useRef} from 'react';

import { FaSearch, FaSortDown } from 'react-icons/fa';

const SearchInput = ({debouncedNewSearch, showModeList, pickedMode, setPickedMode}) => {
    const searchTxt = useRef('');
    const pickingModes = [
        {value: 'deals', header: 'search deals', desc: 'every day new deal is out ... '},
        {value: 'products', header: 'search products', desc: 'browse all products'}
    ];

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
                placeholder={`${showModeList === 'show'?'...':'search'+' '+pickedMode}`} 
                className='focus:outline-none text-4xl w-4/5 capitalize border-y-2 border-primary dark:border-primary-dark dark:bg-[#1e293b]'
                onKeyDown={(e)=> e.key === 'Enter'?newSearch(e.target.value):null}
                onInput={debouncedNewSearch}
            />
            <div id="search-btn" className='bd-btn-icon-center w-1/5 bg-primary-bg dark:primary-bg-dark rounded-r-2xl py-6 text-center'>
                <FaSearch className='text-4xl text-primary dark:text-primary-dark inline-block' />
            </div>
        </div>
        {
            showModeList && <ul id='mode-pickup-list' className='w-full block border-primary dark:border-primary-dark border-x border-b-4'>
                {
                    pickingModes.map(mode => {
                        return <li key={mode.value} className="cursor-pointer mt-4 capitalize hover:bg-primary dark:hover:bg-primary-dark hover:text-white" onClick={()=>setPickedMode(mode.value)}>
                            <h1 className="text-3xl">{mode.header}</h1>
                            <h2 className="text-2xl">{mode.desc}</h2>
                        </li>
                    })
                }
            </ul>
        }
    </div>
};

export default SearchInput;