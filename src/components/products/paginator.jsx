import React,{useEffect, useCallback, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiCallStarted } from "../../store/actions/API.js";
import { browseAllProducts } from "../../store/config/products.js";

//products browsing paginator
//1- item component to render item
const Paginator = ({ItemComponent}) => {
    const dispatch = useDispatch();
    const {items, canPaginate, currentPage} = useSelector(state=>state.products.browsing);
    const page = useRef(currentPage);
    //window scrolling function
    const scrolling = useCallback((e) => {
        e.stopImmediatePropagation();
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            doPaginate();
        }
    }, []);
    //do paginate
    const doPaginate = async() => {
        dispatch({
            type: apiCallStarted.type,
            payload: browseAllProducts({ page: page.current, search: "" }),
        });
    };
    //first mount
    //1- if no items do init paginate
    //2- removeEventListener scroll after unmount
    useEffect(()=>{
        if(items.length === 0) {
            doPaginate();
        }
        return () => window.removeEventListener("scroll", scrolling);
    }, []);
    //update component current page value
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