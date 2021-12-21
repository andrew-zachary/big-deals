import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({showModeList, pickedMode}) => {
    return <div id="search-input" className='w-full flex'>
        <input id="search-text" type="text" placeholder={`${showModeList === 'show'?'...':'search'+' '+pickedMode}`} className='focus:outline-none text-4xl w-4/5 capitalize border border-primary' />
        <button className='bd-btn-icon-center w-1/5 bg-primary rounded-r-2xl py-6'><FaSearch className='text-4xl inline-block text-white' /></button>
    </div>
};

export default SearchInput;