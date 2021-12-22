import React from 'react';
import { useSelector } from 'react-redux';
import {getProductComments} from '../store/end-points/comment.js'
import InfiniteScrollList from '../components/app/infinite-scroll-list.jsx';
import CommentListItem from '../components/comments-page/comment-list-item.jsx';

const CommentsPage = () => {
    const {commentsItems, commentsLastPage, commentsHasMore} = useSelector(state=>state.comment);
    const test = {
        "avgRating": {
            "amount": 1.875,
            "numOfRating": 3
        },
        "_id": "61ab7506478f296a8ad4735b",
        "seller": "61ab73e0478f296a8ad47343",
        "name": "name7",
        "features": [
            "feature1",
            "feature2",
            "feature3"
        ],
        "desc": "desc7",
        "price": 17.05,
        "instock": true,
        "freeShipping": true,
        "__v": 0
    };
    return <div id="comments-page" className="flex flex-col px-4 max-w-screen-sm mx-auto h-full">
        <InfiniteScrollList
            endPointOptions={getProductComments}
            items={commentsItems} 
            hasMore={commentsHasMore} 
            lastPage={commentsLastPage}
            ItemComponent={CommentListItem} 
            pickedMode="comments" 
            params={{productId: test._id}}/>
    </div>
};

CommentsPage.dispalyName = "comments page";

export default CommentsPage;