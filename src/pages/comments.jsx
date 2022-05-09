import React, {useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { commentReset } from '../store/slices/comment.js';

import CommentsTabs from '../components/comments-page/comments-tabs.jsx';

const CommentsPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type: commentReset.type});
    }, []);
    return <div id="comments-page" className='flex flex-col justify-center px-4 max-w-screen-sm mx-auto h-full'>
        <CommentsTabs />
    </div>
};

CommentsPage.dispalyName = "comments page";

export default CommentsPage;