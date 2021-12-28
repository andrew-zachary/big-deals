import React from 'react';

import CommentsTabs from '../components/comments-page/comments-tabs.jsx';

const CommentsPage = () => {
    return <div id="comments-page" className='flex flex-col justify-center px-4 max-w-screen-sm mx-auto h-full'>
        <CommentsTabs />
    </div>
};

CommentsPage.dispalyName = "comments page";

export default CommentsPage;