import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getProductComments} from '../store/end-points/comment.js'
import InfiniteScrollList from '../components/app/infinite-scroll-list.jsx';
import CommentListItem from '../components/comments-page/comment-list-item.jsx';

const CommentsPage = () => {
    const params = useParams();
    const {commentsItems, commentsLastPage, commentsHasMore} = useSelector(state=>state.comment);
    return <div id="comments-page" className="flex flex-col px-4 max-w-screen-sm mx-auto h-full">
        <InfiniteScrollList
            endPointOptions={getProductComments}
            items={commentsItems} 
            hasMore={commentsHasMore} 
            lastPage={commentsLastPage}
            ItemComponent={CommentListItem} 
            pickedMode="comments" 
            params={{productId: params.id}}/>
    </div>
};

CommentsPage.dispalyName = "comments page";

export default CommentsPage;