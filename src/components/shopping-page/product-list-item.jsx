import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ProductListItem = ({item}) => {
    return <li className='product-block'>
        <h1 className='inline-block text-4xl capitalize font-mon font-medium'>{item.name}</h1>
        <ReactStars 
            count={5} 
            size={34} 
            edit={false} 
            value={item.avgRating.amount}
            isHalf={true}
            activeColor='#f68b1e'
            color="#f9ae6280"
        />
        <div className='text-5xl text-primary py-4'>
            <span className='font-mon font-medium'>{item.price}</span><span className='bd-unit font-mon font-medium'>$</span>
        </div>
        <p className='text-4xl py-4'>{item.desc}</p>
        <ul>
            {
                item.features.map(feature => {
                    return <li key={feature} className='text-3xl p-4 inline-block border border-primary'>{feature}</li>
                })
            }
        </ul>
    </li> 
};

export default ProductListItem;