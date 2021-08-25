import React, {useEffect, useCallback, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiCallStarted } from "../../store/actions/API.js";
import { searchAllProducts } from "../../store/config/products.js";

//paginator
//1- item component template to render item
const Paginator = ({ItemComponent}) => {
    const dispatch = useDispatch();
    const {items, canPaginate, currentPage, searchingStr, newSearch} = useSelector(state=>state.products.searching);
    const page = useRef(currentPage);
    const currentSearchStr = useRef(searchingStr);
    //window scrolling function
    const scrolling = useCallback((ev) => {
        ev.stopImmediatePropagation();
        if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight) {
            doPaginate();
        }
    }, []);
    //start search only if search string is not empty or it is new search
    //1- addEventListener scroll
    //2- dispatch apiCallStarted with searchAllProducts config
    const startSearch = async() => {
        if(currentSearchStr.current.length === 0 || !newSearch) return;
        dispatch({
            type: apiCallStarted.type,
            payload: searchAllProducts({ page: page.current, search: currentSearchStr.current }),
        });
    }
    //do paginate
    const doPaginate = async() => {
        dispatch({
            type: apiCallStarted.type,
            payload: searchAllProducts({ page: page.current, search: currentSearchStr.current }),
        });
    };
    //update component current page num
    useEffect(()=>{
        page.current = currentPage;
    }, [currentPage]);
    //when canPaginate changes to false remove scrolling listener or add it if canPaginate true
    useEffect(()=>{
        if(!canPaginate) {
            window.removeEventListener("scroll", scrolling);
        } else {
            window.addEventListener("scroll", scrolling);
        }
    }, [canPaginate]);
    //when searchingStr changes
    //1- set currentSearchStr to new search str
    //2- start search
    useEffect(()=>{
        currentSearchStr.current = searchingStr;
        startSearch();
    }, [searchingStr]);
    //unmount
    //1- at unmount removeEventListener scroll
    useEffect(()=>{
        return ()=> window.removeEventListener("scroll", scrolling);
    }, []);
    return (
        <>
            {
                items.map((item)=>{
                    return (
                        <ItemComponent key={item._id} itemData={item} />
                    )
                })
            }
        </> 
    );
};

export default Paginator;