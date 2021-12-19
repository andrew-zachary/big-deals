import React from 'react';

const DealListItem = ({deal}) => {
    return <li className='py-6'>
        <h1 className='text-4xl'>{deal.name}</h1>
        <h2 className='text-3xl'>{deal.desc}</h2>
    </li>
};

export default DealListItem;