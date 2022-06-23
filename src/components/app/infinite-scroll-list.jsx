import React, {useRef, useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';

import { apiStartCall } from '../../store/actions.js';

const InfiniteScrollList = ({params, query, pickedMode, endPointOptions, items, hasMore, lastPage, ItemComponent, collectionName}) => {
    const {userType} = useSelector(state=>state.user)
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const scrollingList = useRef();
    const [doPaginate, setDoPagiante] = useState(false);
    const scrollingHandler = useCallback((e)=>{
        if ((Math.floor(e.target.scrollTop) + Math.floor(e.target.clientHeight) + 40) > Math.floor(e.target.scrollHeight)) {
            setDoPagiante(true);
        }
    }, []);
    //at the start load items if no items in the store (first load);
    useEffect(()=>{
        if(items.length === 0 && hasMore && userType !== undefined) {
            dispatch( {type: apiStartCall.type, payload:endPointOptions(params, {lastPage, limit:5, ...query})} );
        }
        // return () => {
        //     return scrollingList.current.unMount();
        // }
    }, [userType]);
    // Do Paginate 
    // 1- remove scroll event
    // 2- paginate only if scrolling bottom and the returned items is not empty array
    useEffect(()=>{
        if(doPaginate && hasMore) {
            scrollingList.current.getScrollElement().removeEventListener('scroll', scrollingHandler);
            setDoPagiante(false);
            dispatch( {type: apiStartCall.type, payload:endPointOptions(params, {lastPage, limit:5, ...query})} );
        }
    }, [doPaginate]);
    //add scrolling event listener only if items changed
    useEffect(()=>{
        scrollingList.current.getScrollElement().addEventListener('scroll', scrollingHandler);
    }, [items]);
    return <SimpleBar ref={scrollingList} autoHide={false}>
        {
            lastPage === 1 && <div id='searching' className='bd-font-base w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-center capitalize font-medium'>
                {t('shopping.search.msgs.searching')}
            </div> 
        }
        <ul mode={pickedMode} id="infinite-scroll-list" className='h-full px-6'>
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
            items.length === 0 && !hasMore && <div id='not-found' className='bd-font-base w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-center capitalize font-medium'>
                {t('shopping.search.msgs.not_found')}
            </div> 
        }
    </SimpleBar>
};

InfiniteScrollList.displayName = "infinite scroll list";

export default InfiniteScrollList;