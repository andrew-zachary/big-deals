import React, {useRef} from 'react';
import SimpleBar from 'simplebar-react';

import { FaSearch, FaSortDown } from 'react-icons/fa';

const SearchInput = ({resetSearchHandler, autoComplete, autoCompleteHandler, searchHandler, showModeList, pickedMode, setPickedMode}) => {
    const searchTxt = useRef('');
    const pickingModes = [
        {value: 'deals', header: 'search deals', desc: 'every day new deal is out ... '},
        {value: 'products', header: 'search products', desc: 'browse all products'}
    ];
    const pickAutoComplete = (e) => {
        const searchValue = e.target.innerHTML;
        searchTxt.current.value = searchValue;
        searchHandler(searchValue);
    }
    const modePicked = (mode) => {
        resetSearchHandler();
        setPickedMode(mode);
    }

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
                onKeyDown={(e)=> e.key === 'Enter'?searchHandler(e.target.value):null}
                onInput={(e)=> autoCompleteHandler(e.target.value)}
            />
            <button
                id="search-btn"
                type="button"
                onClick={()=> searchHandler(searchTxt.current.value)}
                className='bd-btn-icon-center w-1/5 bg-primary dark:bg-primary-dark rounded-r-2xl py-6'><FaSearch className='text-4xl inline-block text-white' />
            </button>
        </div>
        {
            autoComplete && <SimpleBar id='auto-complete-list' className='p-5 border-primary dark:border-primary-dark border-x border-b-4'>
                <ul className='w-full block'>
                    <li onClick={(e)=> pickAutoComplete(e)} className='p-4 text-black dark:text-white text-4xl hover:text-white hover:bg-primary hover:dark:bg-primary-dark cursor-pointer'>20</li>
                    <li onClick={(e)=> pickAutoComplete(e)} className='p-4 text-black dark:text-white text-4xl hover:text-white hover:bg-primary hover:dark:bg-primary-dark cursor-pointer'>1</li>
                    <li onClick={(e)=> pickAutoComplete(e)} className='p-4 text-black dark:text-white text-4xl hover:text-white hover:bg-primary hover:dark:bg-primary-dark cursor-pointer'>3</li>
                    <li onClick={(e)=> pickAutoComplete(e)} className='p-4 text-black dark:text-white text-4xl hover:text-white hover:bg-primary hover:dark:bg-primary-dark cursor-pointer'>0</li>
                    <li onClick={(e)=> pickAutoComplete(e)} className='p-4 text-black dark:text-white text-4xl hover:text-white hover:bg-primary hover:dark:bg-primary-dark cursor-pointer'>11</li>
                    <li onClick={(e)=> pickAutoComplete(e)} className='p-4 text-black dark:text-white text-4xl hover:text-white hover:bg-primary hover:dark:bg-primary-dark cursor-pointer'>pro</li>
                </ul>
            </SimpleBar>
        }
        {
            showModeList && <ul id='mode-pickup-list' className='w-full block border-primary dark:border-primary-dark border-x border-b-4'>
                {
                    pickingModes.map(mode => {
                        return <li key={mode.value} className="cursor-pointer mt-4 capitalize hover:bg-primary dark:hover:bg-primary-dark hover:text-white" onClick={()=>modePicked(mode.value)}>
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