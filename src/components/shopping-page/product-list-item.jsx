import React from 'react';

const ProductListItem = ({item}) => {
    return <li className='py-6'>
        <h1 className='text-4xl'>{item.name}</h1>
        <h2 className='text-3xl'>{item.desc}</h2>
    </li>
};

export default ProductListItem;