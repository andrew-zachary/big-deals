import React, {useRef, useState, useEffect, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { apiStartCall } from '../../store/actions.js';

const InfiniteScrollList = ({params, pickedMode, endPointOptions, items, hasMore, lastPage, ItemComponent}) => {
    const dispatch = useDispatch();
    const scrollingList = useRef();
    const [doPaginate, setDoPagiante] = useState(false);
    const scrollingHandler = useCallback((e)=>{
        if (Math.floor(e.target.scrollTop) + Math.floor(e.target.clientHeight) === Math.floor(e.target.scrollHeight)) {
            setDoPagiante(true);
        }
    }, []);
    //at the start load items if no items in the store (first load);
    useEffect(()=>{
        if(items.length === 0) {
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
    return <ul mode={pickedMode} id="infinite-scroll-list" ref={scrollingList} className='my-8 h-full overflow-y-scroll'>
        {
            items.map(item=>{
                return <ItemComponent key={item._id} item={item} />
            })
        }
        { hasMore && <li key="spinner">
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </li> }
    </ul>
};

InfiniteScrollList.displayName = "infinite scroll list";

export default InfiniteScrollList;