import React,{useEffect, useState, useCallback, useRef} from "react";
import {http_client} from '../utils/http';

//paginator
//1- url for get request
//2- item component to render item
const Paginator = ({url, ItemComponent}) => {
    const [list, setList] = useState([]);
    const page = useRef(1);
    //window scrolling function
    const scrolling = useCallback((ev) => {
        ev.stopImmediatePropagation();
        if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight) {
            doPaginate();
        }
    }, []);
    //do paginate
    //1- get items 
    //2- update list
    //3- inc page num
    const doPaginate = async() => {
        let res = await http_client.get(`${url}/?page=${page.current}`);
        if(res.data.length === 0) {
            window.removeEventListener("scroll", scrolling);
            return;
        }
        setList(lastValue=>lastValue.concat(res.data));
        page.current = page.current +1;
    };
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