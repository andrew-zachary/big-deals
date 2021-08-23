import React,{useEffect, useState, useCallback, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiCallStarted } from "../../store/actions/API.js";
import { browseAllProducts } from "../../store/config/products.js";

//paginator
//1- url for get request
//2- item component to render item
const Paginator = ({url, ItemComponent}) => {
    const dispatch = useDispatch();
    const {items, canPaginate} = useSelector(state=>state.products);
    const page = useRef(1);
    //window scrolling function
    const scrolling = useCallback((ev) => {
        ev.stopImmediatePropagation();
        if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight) {
            doPaginate();
        }
    }, []);
    //do paginate
    //1- dispatch apiCallStarted with browseAllProducts config
    //2- inc page num
    const doPaginate = async() => {
        dispatch({
            type: apiCallStarted.type,
            payload: browseAllProducts({ page: page.current, search: "" }),
        });
        page.current = page.current +1;
    };
    //when canPaginate changes to false remove scrolling listener
    useEffect(()=>{
        if(!canPaginate) {
            window.removeEventListener("scroll", scrolling);
        }
    }, [canPaginate]);
    //first mount
    //1- addEventListener scroll after mount
    //2- do init paginate
    //3- removeEventListener scroll after unmount
    useEffect(()=>{
        window.addEventListener("scroll", scrolling);
        doPaginate();
        return () => window.removeEventListener("scroll", scrolling);
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