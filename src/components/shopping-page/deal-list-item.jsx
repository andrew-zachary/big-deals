import React from 'react';
import ProductListItem from './product-list-item.jsx';

const DealListItem = ({item}) => {
    return <li className='py-6 border-primary-dim border-b'>
        <div className='item-header'>
            <h1 className='text-5xl capitalize font-mon font-medium'>{item.name}</h1>
            <div className='text-4xl capitalize text-primary inline-block'>
                <span className='off-box p-4 inline-block uppercase bg-primary text-white font-ssp font-medium'>off</span>
                <span>{parseFloat(item.discount).toFixed(2)}</span>
                <span className='bd-unit'>%</span>
            </div>
        </div>
        <h2 className='text-3xl'>{item.desc}</h2>
        <ul id="deal-products">
            {
                item.products.map((product)=>{
                    return <ProductListItem key={product._id} item={product} />
                })
            }
        </ul>
    </li>
};

export default DealListItem;