import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { format } from 'date-fns';

const CommentListItem = ({item}) => {
    return <li key={item._id} className='mt-10 pb-4 border-primary-dim border-b'>
        <h1 className='text-4xl text-primary font-mon font-light'>by <span className='font-medium'>{item.userId.authId.firstName}</span> on <span className='font-medium'>{format(new Date(item.createdAt), 'yyyy-MM-dd') }</span></h1>
        <ReactStars 
            count={5} 
            size={34} 
            edit={false} 
            value={item.rate}
            isHalf={true}
            activeColor='#f68b1e'
            color="#f9ae6280"
        />
        <p className='text-4xl'>{item.body}</p>
    </li>
};

CommentListItem.displayName = "comment list item";

export default CommentListItem