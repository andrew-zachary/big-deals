import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductListItem = ({item}) => {
    return <li className='product-block'>
        <h1 className='inline-block text-4xl capitalize font-mon font-medium'>{item.name}</h1>
        <ReactStars 
            count={5} 
            size={34} 
            edit={false} 
            value={Math.ceil(item.avgRating.amount*2)/2}
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
        <div className="comments-block flex justify-end">
            <Link className="comments-link text-4xl py-4 px-4 bg-primary text-white p-2 rounded-lg" to={`/comments/${item._id}`} state={{product:item}}>see comments</Link>
        </div>
    </li>
};

export default ProductListItem;