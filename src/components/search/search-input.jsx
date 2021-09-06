import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {newSearchStarted} from "../../store/slices/products";

const SearchInput = () => {
    const dispatch = useDispatch();
    const {searchingStr} = useSelector(state=>state.products.searching);
    const [searchInput, setSearchInput] = useState(searchingStr);
    let bounce = null;
    const inputHandler = useCallback((e)=>{
            clearTimeout(bounce);
            bounce = setTimeout(()=>{
                dispatch({type:newSearchStarted.type, payload:{searchingStr:e.target.value}});
            }, 2000);
        }, []);
    return (
        <div className="form-group bd-form-group mx-auto">
            <input type="text" className="w-100" value={searchInput} onInput={(e)=>{setSearchInput(e.target.value)}} onChange={(e)=>inputHandler(e)} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="searchAllProducts">Search all products</label>
        </div>
    );
};

export default SearchInput;