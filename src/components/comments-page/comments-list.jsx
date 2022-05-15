import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegCommentDots } from 'react-icons/fa';

import { getProductComments } from '../../store/end-points/comment.js';

import InfiniteScrollList from '../../components/app/infinite-scroll-list.jsx';
import CommentListItem from '../../components/comments-page/comment-list-item.jsx';
import AuthedActionBtn from '../app/authed-action-btn.jsx';

const CommentsList = ({productId, setCurrentTab}) => {
    const {commentsItems, commentsLastPage, commentsHasMore} = useSelector(state=>state.comment);
    return <>
        <InfiniteScrollList
        endPointOptions={getProductComments}
        items={commentsItems} 
        hasMore={commentsHasMore} 
        lastPage={commentsLastPage}
        ItemComponent={CommentListItem}
        pickedMode="comments"
        collectionName="comments"
        params={{productId}}/>
        <div id="make-comment" className='flex justify-end relative'>
            <AuthedActionBtn 
                action={setCurrentTab} 
                payload='new' 
                tailWindStyle='absolute p-6 bg-primary dark:bg-primary-dark shadow-secondary text-primay rounded-full top-[-8rem]' 
            >
                <FaRegCommentDots className="text-white text-6xl inline-block" />
            </AuthedActionBtn>
        </div>
    </>
};

CommentsList.displayName = 'comments list';

export default CommentsList;