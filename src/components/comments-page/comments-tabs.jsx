import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaRegCommentDots } from 'react-icons/fa';

import { getProductComments } from '../../store/end-points/comment.js'

import InfiniteScrollList from '../../components/app/infinite-scroll-list.jsx';
import CommentListItem from '../../components/comments-page/comment-list-item.jsx';
import CommentsTotal from '../../components/comments-page/comments-total.jsx';
import TellUs from '../../components/comments-page/tell-us.jsx';
import Appreciate from '../../components/comments-page/appreciate.jsx';
import AuthedActionBtn from '../app/authed-action-btn.jsx';

const CommentsTabs = () => {
    const [currentTab, setCurrentTab] = useState('total');
    const params = useParams();
    const {commentsItems, commentsLastPage, commentsHasMore} = useSelector(state=>state.comment);
    const pickUpTab = (currentTab) => {
        switch (currentTab) {
            case 'thank':
                return <Appreciate />
            case 'new':
                return <TellUs setCurrentTab={setCurrentTab} />
            case 'list':
                return <>
                    <InfiniteScrollList
                    endPointOptions={getProductComments}
                    items={commentsItems} 
                    hasMore={commentsHasMore} 
                    lastPage={commentsLastPage}
                    ItemComponent={CommentListItem}
                    pickedMode="comments" 
                    params={{productId: params.id}}/>
                    <div id="make-comment" className='flex justify-end relative'>
                        <AuthedActionBtn 
                            action={setCurrentTab} 
                            payload='new' 
                            tailWindStyle='absolute p-6 bg-primary shadow-secondary text-primay rounded-full top-[-8rem]' 
                            reactIcon={<FaRegCommentDots className="text-white text-6xl inline-block" />}
                        />
                    </div>
                </>
            case 'total':
                    return <CommentsTotal setCurrentTab={setCurrentTab} />
            default:
                break;
        }
    }
    return <>
        {pickUpTab(currentTab)}
    </>
};

CommentsTabs.displayName = 'comments tabs';

export default CommentsTabs;