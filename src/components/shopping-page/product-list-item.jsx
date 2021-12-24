import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { FaRegCommentDots, FaCheck, FaTimes, FaCartPlus } from 'react-icons/fa';

const ProductListItem = ({item}) => {
    return <li className='product-block'>
        <h1 className='inline-block text-4xl capitalize font-mont font-medium'>{item.name}</h1>
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
            <span className='font-mont font-medium'>{item.price}</span><span className='bd-unit font-mon font-medium'>$</span>
        </div>
        <p className='text-4xl py-4 font-ssp font-medium'>{item.desc}</p>
        <ul>
            {
                item.features.map(feature => {
                    return <li key={feature} className='text-3xl p-4 inline-block border border-primary font-ssp font-medium capitalize'>{feature}</li>
                })
            }
        </ul>
        <div className='py-4 flex items-center w-full'>
            <span className='font-mont font-medium text-4xl capitalize'>instock</span>
            <span className='text-4xl bd-unit font-ssp font-medium text-primary'>{item.instock?<FaCheck className='text-4xl' />:<FaTimes className='text-4xl' />}</span>
        </div>
        <div className='py-4 flex items-center w-full'>
            <span className='font-mont font-medium text-4xl capitalize'>free shipping</span>
            <span className='text-4xl bd-unit font-ssp font-medium text-primary'>{item.freeShipping?<FaCheck className='text-4xl' />:<FaTimes className='text-4xl' />}</span>
        </div>
        <div className="py-4 comments-block flex justify-center items-center">
            <Link className="comments-link p-6 bg-primary shadow-secondary rounded-full" to={`/comments/${item._id}`} state={{product:item}}>
                <FaRegCommentDots className="text-white text-6xl inline-block" />
            </Link>
            <span className='py-4 capitalize text-4xl text-primary font-mont font-medium bd-unit'>see reivews</span>
        </div>
        <div className='py-4'>
            <span className='font-mont font-medium text-4xl capitalize'>by</span>
            <span className='text-4xl bd-unit font-ssp font-medium text-primary'>{item.seller.authId.firstName}</span>
        </div>
    </li>
};

export default ProductListItem;