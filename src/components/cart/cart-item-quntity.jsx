import React, {useState} from 'react';
import { FaSortDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { range } from 'lodash-es'

import { changeItemQuantity } from '../../store/slices/cart.js';

const CartItemQuantity = ({item}) => {
    const [isPicking, setIsPicking] = useState(false);
    const picks = range(1, 31);
    const dispatch = useDispatch();
    const quantityChangeHandler = (pick) => {
        setIsPicking(false);
        dispatch({type: changeItemQuantity.type, payload: {item, pick}});
    }
    return <div className='flex items-center bg-primary px-8 py-4 rounded-full relative'>
        <span className='font-mont font-medium text-white'>{item.quantity}</span>
        <FaSortDown onClick={()=>setIsPicking(!isPicking)} className='text-white text-4xl bd-unit mt-[-1rem]' />
        { isPicking && <ul className='overflow-scroll max-h-[20rem] absolute top-full left-1/2 translate-x-[-50%] mt-2 bg-white border border-primary z-9998'>
            {
                picks.map(pick=>{
                    return <li onClick={()=>quantityChangeHandler(pick)} className='p-3 text-primary'>{pick}</li>
                })
            }
        </ul> }
    </div>
};

CartItemQuantity.displayName = 'cart item quantity';

export default CartItemQuantity;