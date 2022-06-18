import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const CommentListItem = ({item}) => {
    const {t} = useTranslation();
    return <li key={item._id} className='mt-10 pb-4 border-primary-dim border-b'>
        <ReactStars 
            count={5} 
            size={34} 
            edit={false} 
            value={item.rate}
            isHalf={true}
            activeColor='var(--primary)'
            color="#f9ae6280"
        />
        <p className='text-4xl mt-3'>{item.body}</p>
        <h1 className='bd-font-base text-2xl text-primary dark:text-primary-dark font-mon font-regular mt-5'> 
            <span>{t('review.by')}</span><span className='font-bold bd-unit'>{item.userId.authId.firstName}</span>
            <span className='bd-unit'></span>
            <span>{t('review.on')}</span><span className='font-bold bd-unit'>{format(new Date(item.createdAt), 'yyyy-MM-dd') }</span>
        </h1>
    </li>
};

CommentListItem.displayName = "comment list item";

export default CommentListItem