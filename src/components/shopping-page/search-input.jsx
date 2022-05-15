import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch, FaSortDown } from 'react-icons/fa';

import { resetProductsSearch } from '../../store/slices/product.js';
import { resetDealsSearch } from '../../store/slices/deal.js';

const SearchInput = ({startSearch, setStartSearch, showModeList, pickedMode}) => {
    const dispatch = useDispatch();
    const searchTxt = useRef('');
    const searchHandler = (startSearch) => {
        if(startSearch.value !== searchTxt.current.value) {
            dispatch({type: resetProductsSearch.type});
            dispatch({type: resetDealsSearch.type});
        }
        setStartSearch({
            show: true, 
            value: searchTxt.current.value, 
            mode: pickedMode
        })
    };
    return <div id="search-input" className='w-full flex'>
        <button id="pick-mode-btn" type="button" className="relative border-y-2 border-primary dark:border-primary-dark dark:bg-[#1e293b]">
            <div id="mode-picker" className="absolute h-full w-full"></div>
            <FaSortDown className='cursor-pointer text-primary dark:text-primary-dark text-4xl mt-[-1rem]' />
        </button>
        <input 
            ref={searchTxt} 
            id="search-text" 
            type="text" 
            placeholder={`${showModeList === 'show'?'...':'search'+' '+pickedMode}`} 
            className='focus:outline-none text-4xl w-4/5 capitalize border-y-2 border-primary dark:border-primary-dark dark:bg-[#1e293b]'
            onKeyDown={(e)=> e.key === 'Enter'?searchHandler(startSearch):null} 
        />
        <button
            id="search-btn"
            type="button"
            onClick={()=> searchHandler(startSearch)} 
            className='bd-btn-icon-center w-1/5 bg-primary dark:bg-primary-dark rounded-r-2xl py-6'><FaSearch className='text-4xl inline-block text-white' />
        </button>
    </div>
};

export default SearchInput;