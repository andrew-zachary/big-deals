import React, {useRef, useState, useEffect, useCallback} from 'react';
import { useDispatch } from 'react-redux';

import { apiStartCall } from '../../store/actions.js';

const InfiniteScrollList = ({params, pickedMode, endPointOptions, items, hasMore, lastPage, ItemComponent, collectionName}) => {
    const dispatch = useDispatch();
    const scrollingList = useRef();
    const [doPaginate, setDoPagiante] = useState(false);
    const scrollingHandler = useCallback((e)=>{
        if ((Math.floor(e.target.scrollTop) + Math.floor(e.target.clientHeight) + 300) > Math.floor(e.target.scrollHeight)) {
            setDoPagiante(true);
        }
    }, []);
    //at the start load items if no items in the store (first load);
    useEffect(()=>{
        if(items.length === 0 && hasMore) {
            dispatch( {type: apiStartCall.type, payload:endPointOptions(params)} );
        }
    }, []);
    // Do Paginate 
    // 1- remove scroll event
    // 2- paginate only if scrolling bottom and the returned items is not empty array
    useEffect(()=>{
        if(doPaginate && hasMore) {
            scrollingList.current.removeEventListener('scroll', scrollingHandler);
            setDoPagiante(false);
            dispatch( {type: apiStartCall.type, payload:endPointOptions(params, lastPage)} );
        }
    }, [doPaginate]);
    //add scrolling event listener only if items changed
    useEffect(()=>{
        scrollingList.current.addEventListener('scroll', scrollingHandler);
    }, [items]);
    return <>
        {
            lastPage === 1 && <div id='no-comments' className='w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-center capitalize font-mont font-bold'>
                searching for {collectionName}
            </div> 
        }
        <ul mode={pickedMode} id="infinite-scroll-list" ref={scrollingList} className='my-8 h-full overflow-y-scroll'>
            {
                items.map(item=>{
                    return <ItemComponent key={item._id} item={item} />
                })
            }
            { hasMore && items.length > 4 && <li key="spinner">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </li> }
        </ul>
        {
            items.length === 0 && !hasMore && <div id='no-comments' className='w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-center capitalize font-mont font-bold'>
                no {collectionName} found ...
            </div> 
        }
    </>
};

InfiniteScrollList.displayName = "infinite scroll list";

export default InfiniteScrollList;