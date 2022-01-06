import React, { useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { apiStartCall } from '../../store/actions.js';
import { allOrders } from '../../store/end-points/order.js';

const AllOrdersTab = () => {
    const dispatch = useDispatch();
    const {orders} = useSelector(state=>state.order);
    useEffect(()=>{
        if(orders.length === 0) {
            dispatch({type: apiStartCall.type, payload: allOrders(null, 1, 5, null)});
        }
    }, []);
    return <>
        {orders.length === 0 && <h1 className='font-ssp font-regular text-3xl mt-4'>no orders found ...</h1>}
        <ul id='orders'>
            {
                orders.map(order => {
                    return <li className='order mt-8' key={order._id}>
                        <div className='order-header flex items-center justify-between'>
                            <h1 className='text-2xl'>{format(new Date(order.createdAt), 'yyyy-MM-dd')}</h1>
                            <div className='ctrls'>
                                <FaRegHeart className='text-4xl text-primary' />
                            </div>
                        </div>
                        <div className="order-body"></div>
                        <div className='order-footer flex justify-center my-4 p-4 bg-primary font-mont font-regular text-3xl text-white'>
                            <span className='capitalize'>total price:</span>
                            <span className='bd-unit'>$</span>
                            <span className='bd-unit'>{order.totalPrice}</span>
                        </div>
                    </li>
                })
            }
        </ul>
    </>
};

AllOrdersTab.displayName = 'all orders tab';

export default AllOrdersTab;