import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import {FaChevronDown} from 'react-icons/fa';
import CircleRating from './circle-rating.jsx';

const CommentsHeader = ({setCurrentTab, t}) => {
    const {state:{product}} = useLocation();

    return <div id='rate-out' className='text-center'>
        <h1 className='text-8xl font-mon font-medium p-[8rem] inline-block relative'>
            <CircleRating amount={product.avgRating.amount} />
            <span className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>{parseFloat(product.avgRating.amount).toFixed(1)}</span>
        </h1>
        <h2 className='bd-font-base text-5xl dark:text-primary-dark font-mon font-medium mt-6 text-primary'>{product.avgRating.numOfRating} {t('review.label.plural')}</h2>
        <ReactStars
            count={5} 
            size={60} 
            edit={false} 
            value={Math.ceil(product.avgRating.amount*2)/2}
            isHalf={true}
            activeColor='var(--primary)'
            color="#f9ae6280"
        />
        <button className='text-6xl text-primary dark:text-primary-dark mt-8' onClick={()=>setCurrentTab('list')}><FaChevronDown /></button>
    </div>
};

CommentsHeader.displayName = 'comments total';

export default CommentsHeader;