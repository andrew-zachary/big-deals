import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { format } from 'date-fns';

const CommentListItem = ({item}) => {

    return <li key={item._id} className='mt-10 pb-4 border-primary-dim border-b'>
        <ReactStars 
            count={5} 
            size={34} 
            edit={false} 
            value={item.rate}
            isHalf={true}
            activeColor='#f68b1e'
            color="#f9ae6280"
        />
        <p className='text-4xl mt-3'>{item.body}</p>
        <h1 className='text-4xl text-primary font-mon font-light mt-5'>by <span className='font-medium'>{item.userId.authId.firstName}</span> on <span className='font-medium'>{format(new Date(item.createdAt), 'yyyy-MM-dd') }</span></h1>
    </li>
};

CommentListItem.displayName = "comment list item";

export default CommentListItem