import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {newSearchStarted} from "../../store/slices/products";

const SearchInput = () => {
    const dispatch = useDispatch();
    const {searchingStr} = useSelector(state=>state.products.searching);
    const inputEle = useRef(null);
    let bounce = null;
    const inputHandler = (e)=>{
        clearTimeout(bounce);
        bounce = setTimeout(()=>{
            dispatch({type:newSearchStarted.type, payload:{searchingStr:e.target.value}});
        }, 2000);
    };
    useEffect(()=>{
        inputEle.current.value = searchingStr;
    }, []);
    return (
        <input placeholder="search all products" className="w-100 mx-auto d-block p-2" type="text" ref={inputEle} onChange={(e)=>inputHandler(e)} />
    );
};

export default SearchInput;