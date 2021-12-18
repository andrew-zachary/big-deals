import React from 'react';
import { useSelector } from 'react-redux';

const ItemsList = () => {
    const deals = useSelector(state=>state.deal.items);
    return <ul id="item-list" className='overflow-y-scroll my-8'>
        {
            deals && deals.map(deal => {
                return <li key={deal._id} className='py-6'>
                    <h1 className='text-4xl'>{deal.name}</h1>
                    <h2 className='text-3xl'>{deal.desc}</h2>
                </li>
            })
        }
    </ul>
};

export default ItemsList;