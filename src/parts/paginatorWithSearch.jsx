import React,{useEffect, useCallback, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiCallStarted } from "../store/actions/API.js";
import { searchAllProducts, browseAllProducts } from "../store/config/products.js";

//paginator
//1- searchStr the search string value
//2- item component to render item
const Paginator = ({searchStr, ItemComponent}) => {
    const dispatch = useDispatch();
    const {items, canPaginate} = useSelector(state=>state.products);
    const page = useRef(1);
    const currentSearchStr = useRef(searchStr);
    //window scrolling function
    const scrolling = useCallback((ev) => {
        ev.stopImmediatePropagation();
        if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight) {
            doPaginate();
        }
    }, []);
    //do search if search string is not empty
    //1- dispatch apiCallStarted with searchAllProducts config
    //2- inc page num
    const doSearch = async() => {
        if(searchStr.length === 0) return;
        dispatch({
            type: apiCallStarted.type,
            payload: searchAllProducts({ page: page.current, search: currentSearchStr.current }),
        });
        page.current = page.current +1;
    }
    //do paginate
    //1- dispatch apiCallStarted with browseAllProducts config
    //2- inc page num
    const doPaginate = async() => {
        dispatch({
            type: apiCallStarted.type,
            payload: browseAllProducts({ page: page.current, search: currentSearchStr.current }),
        });
        page.current = page.current +1;
    };
    //when canPaginate changes to false remove scrolling listener
    useEffect(()=>{
        if(!canPaginate) {
            window.removeEventListener("scroll", scrolling);
        }
    }, [canPaginate]);
    //when searchStr changes
    //1- reset page number to 1
    //2- set currentSearchStr to new search str
    //3- removeEventListener scroll just in case
    //4- addEventListener scroll
    //5- start search
    useEffect(()=>{
        page.current = 1;
        currentSearchStr.current = searchStr;
        window.removeEventListener("scroll", scrolling);
        window.addEventListener("scroll", scrolling);
        doSearch();
    }, [searchStr]);
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