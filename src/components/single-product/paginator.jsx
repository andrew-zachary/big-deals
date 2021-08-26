import React,{useEffect, useCallback, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiCallStarted } from "../../store/actions/API.js";
import { getAllReviews } from "../../store/config/reviews.js";
import { resetReviews } from "../../store/slices/reviews.js";

const Paginator = ({ItemComponent, productId}) => {
    const dispatch = useDispatch();
    const {items, canPaginate, currentPage} = useSelector(state=>state.reviews);
    const page = useRef(currentPage);
    //window scrolling function
    const scrolling = useCallback((e) => {
        e.stopImmediatePropagation();
        if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight) {
            doPaginate();
        }
    }, []);
    //do paginate
    const doPaginate = async() => {
        dispatch({
            type: apiCallStarted.type,
            payload: getAllReviews({ page: page.current, product_id:productId }),
        });
    };
    //first mount
    //1- removeEventListener scroll after unmount
    useEffect(()=>{
        return () => {
            dispatch({type:resetReviews.type});
            window.removeEventListener("scroll", scrolling);
        };
    }, []);
    //update component current page value
    useEffect(()=>{
        page.current = currentPage;
    }, [currentPage]);
    //when canPaginate changes to false remove scrolling listener or add it if canPaginate true
    useEffect(()=>{
        console.log("test");
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
                    return <ItemComponent key={item._id} item={item} />
                })
            }
        </>
    );
};

export default Paginator;