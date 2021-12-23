import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaRegCommentDots } from 'react-icons/fa';

import { getProductComments } from '../store/end-points/comment.js'

import InfiniteScrollList from '../components/app/infinite-scroll-list.jsx';
import CommentListItem from '../components/comments-page/comment-list-item.jsx';
import CommentsHeader from '../components/comments-page/comments-header.jsx';

const CommentsPage = () => {
    const [commentsList, openCommentsList] = useState(false);
    const params = useParams();
    const {commentsItems, commentsLastPage, commentsHasMore} = useSelector(state=>state.comment);

    return <div id="comments-page" className="flex flex-col px-4 max-w-screen-sm mx-auto h-full">
        {
            !commentsList && <CommentsHeader openCommentsList={openCommentsList} />
        }
        {
            commentsList && <>
                <div id="make-comment" className='flex justify-end relative'>
                    <button className='absolute p-6 bg-primary shadow-secondary text-primay rounded-full'><FaRegCommentDots className="text-white text-6xl inline-block" /></button>
                </div>
                <InfiniteScrollList
                endPointOptions={getProductComments}
                items={commentsItems} 
                hasMore={commentsHasMore} 
                lastPage={commentsLastPage}
                ItemComponent={CommentListItem}
                pickedMode="comments" 
                params={{productId: params.id}}/>
            </>
        }
    </div>
};

CommentsPage.dispalyName = "comments page";

export default CommentsPage;