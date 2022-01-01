import React, {useState} from 'react';
import { FaSortDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { range } from 'lodash-es';

import { changeItemQuantity } from '../../store/slices/cart.js';

const CartDealQuantity = ({item}) => {
    const [isPicking, setIsPicking] = useState(false);
    const picks = range(1, 31);
    const dispatch = useDispatch();
    const quantityChangeHandler = (pick) => {
        setIsPicking(false);
        dispatch({type: changeItemQuantity.type, payload: {item, pick, collection:'deals'}});
    }
    return <div className='quantity flex items-center bg-primary px-8 py-4 rounded-full relative'>
        <span className='font-mont font-medium text-white'>{item.quantity}</span>
        <FaSortDown onClick={()=>setIsPicking(!isPicking)} className='cursor-pointer text-white text-4xl bd-unit mt-[-1rem]' />
        { isPicking && <ul className='cursor-pointer overflow-scroll max-h-[20rem] absolute top-full left-1/2 translate-x-[-50%] mt-2 bg-white border border-primary z-9998'>
            {
                picks.map((pick, index)=>{
                    return <li key={index} onClick={()=>quantityChangeHandler(pick)} className='p-3 text-primary'>{pick}</li>
                })
            }
        </ul> }
    </div>
};

CartDealQuantity.displayName = 'cart deal quantity';

export default CartDealQuantity;