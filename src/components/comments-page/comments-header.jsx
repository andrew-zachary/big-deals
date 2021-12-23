import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import {FaChevronDown} from 'react-icons/fa';
import CircleRating from './circle-rating.jsx';

const CommentsHeader = ({openCommentsList}) => {
    const {state:{product}} = useLocation();

    return <section>
        <div id='rate' className='text-center'>
            <h1 className='text-8xl font-mon font-medium p-[8rem] inline-block relative'>
                <CircleRating amount={product.avgRating.amount} />
                <span className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>{parseFloat(product.avgRating.amount).toFixed(1)}</span>
            </h1>
            <h2 className='text-5xl font-mon font-medium mt-6 text-primary'>{product.avgRating.numOfRating} reviews</h2>
            <ReactStars
                count={5} 
                size={60} 
                edit={false} 
                value={Math.ceil(product.avgRating.amount*2)/2}
                isHalf={true}
                activeColor='#f68b1e'
                color="#f9ae6280"
                classNames=""
            />
            <button className='text-6xl text-primary mt-8' onClick={()=>openCommentsList(true)}><FaChevronDown /></button>
        </div>
    </section>
};

CommentsHeader.displayName = 'comments header';

export default CommentsHeader;