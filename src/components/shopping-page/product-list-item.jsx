import React from 'react';
import { useDispatch } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { FaRegCommentDots, FaCheck, FaTimes, FaCartPlus } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import AuthedActionBtn from '../app/authed-action-btn.jsx';
import ProductPhotos from './product-photos.jsx';

import { addItem } from '../../store/slices/cart.js';

const ProductListItem = ({item}) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    return <li className='product-block'>
        <h1 className='bd-font-compo inline-block text-5xl capitalize font-medium'>{item.name}</h1>
        <ProductPhotos 
            thumbs={[
                "https://via.placeholder.com/45x45",
                "https://via.placeholder.com/45x45",
                "https://via.placeholder.com/45x45",
                "https://via.placeholder.com/45x45"
            ]}
            imgs={[
                "https://via.placeholder.com/375x375",
                "https://via.placeholder.com/375x375",
                "https://via.placeholder.com/375x375",
                "https://via.placeholder.com/375x375"
            ]}
        />
        <ReactStars 
            count={5} 
            size={34} 
            edit={false} 
            value={Math.ceil(item.avgRating.amount*2)/2}
            isHalf={true}
            activeColor={'var(--primary)'}
            color="#f9ae6280"
        />
        <div className='text-5xl text-primary dark:text-primary-dark py-4'>
            <span className='bd-font-compo font-medium'>{item.price}</span><span className='bd-unit font-mon font-medium'>$</span>
        </div>
        <p className='bd-font-base text-4xl py-4 font-medium'>{item.desc}</p>
        <ul>
            {
                item.features.map(feature => {
                    return <li key={feature} className='bd-font-base text-3xl p-4 inline-block border border-primary dark:border-primary-dark font-medium capitalize'>{feature}</li>
                })
            }
        </ul>
        <div className='bd-font-base py-4 flex items-center w-full'>
            <span className='font-medium text-4xl capitalize'>{t('shopping.item.in_stock')}</span>
            <span className='text-4xl bd-unit font-medium text-primary dark:text-primary-dark'>{item.instock?<FaCheck className='text-4xl' />:<FaTimes className='text-4xl' />}</span>
        </div>
        <div className='bd-font-compo font-bold py-4 flex items-center w-full'>
            <span className='text-4xl capitalize'>{t('shopping.item.free_shipping')}</span>
            <span className='text-4xl bd-unit font-medium text-primary dark:text-primary-dark'>{item.freeShipping?<FaCheck className='text-4xl' />:<FaTimes className='text-4xl' />}</span>
        </div>
        <div className='bd-font-base mt-4'>
            <span className='font-medium text-4xl capitalize'>{t('shopping.item.by')}</span>
            <span className='text-4xl bd-unit font-medium text-primary dark:text-primary-dark'>{item.seller.authId.firstName}</span>
        </div>
        <div className='flex justify-around mt-8 max-w-[28rem] mx-auto'>
            <Link className='p-4 bg-primary dark:bg-primary-dark shadow-secondary rounded-full' to={`/comments/${item._id}`} state={{product:item}}>
                <FaRegCommentDots className='text-white text-5xl' />
            </Link>
            <AuthedActionBtn
                active={false}
                action={dispatch} 
                payload={ { type: addItem.type, payload:{item, collection: 'products'} } }
                tailWindStyle='p-4 bg-primary dark:bg-primary-dark shadow-secondary rounded-full'
            >
                <FaCartPlus className='text-white text-5xl' />
            </AuthedActionBtn>
        </div>
    </li>
};

ProductListItem.displayName = 'product list item';

export default ProductListItem;