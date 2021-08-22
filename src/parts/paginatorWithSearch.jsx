import React,{useEffect, useState, useCallback, useRef} from "react";
import {http_client} from '../utils/http';

//paginator
//1- url for get request
//2- item component to render item
const Paginator = ({url, searchStr, ItemComponent}) => {
    console.log(searchStr);
    const [list, setList] = useState([]);
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
    //1- get items
    //2- update list
    //3- inc page num
    const doSearch = async() => {
        if(searchStr.length === 0) return;
        let res = await http_client.get(`${url}/?page=${page.current}&s=${currentSearchStr.current}`);
        setList(lastValue=>lastValue.concat(res.data));
        page.current = page.current +1;
    }
    //do paginate
    //1- get items 
    //2- check if no more items then remove scroll event
    //3- update list
    //4- inc page num
    const doPaginate = async() => {
        let res = await http_client.get(`${url}/?page=${page.current}&s=${currentSearchStr.current}`);
        if(res.data.length === 0) {
            window.removeEventListener("scroll", scrolling);
            return;
        }
        setList(lastValue=>lastValue.concat(res.data));
        page.current = page.current +1;
    };
    //after mount
    //1- addEventListener scroll after mount
    //2- removeEventListener scroll after unmount
    useEffect(()=>{
        window.addEventListener("scroll", scrolling);
        return () => window.removeEventListener("scroll", scrolling);
    }, []);
    //when searchStr change
    //1- reset search results list
    //2- reset page number to 1
    useEffect(()=>{
        setList([]);
        page.current = 1;
        currentSearchStr.current = searchStr;
        window.removeEventListener("scroll", scrolling);
        window.addEventListener("scroll", scrolling);
        doSearch();
    }, [searchStr]);
    return (
        <>
            {
                list.length && list.map((item)=>{
                    return (
                        <ItemComponent key={item._id} itemData={item} />
                    )
                })
            }
        </> 
    );
};

export default Paginator;