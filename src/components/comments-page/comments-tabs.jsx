import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import CommentsTotal from './comments-total.jsx';
import TellUs from './tell-us.jsx';
import Appreciate from './appreciate.jsx';
import CommentsList from './comments-list.jsx';

const CommentsTabs = () => {
    const [currentTab, setCurrentTab] = useState('total');
    const params = useParams();
    const pickUpTab = (currentTab) => {
        switch (currentTab) {
            case 'thank':
                return <Appreciate />
            case 'new':
                return <TellUs productId={params.id} setCurrentTab={setCurrentTab} />
            case 'list':
                return <CommentsList productId={params.id} setCurrentTab={setCurrentTab} />
            case 'total':
                return <CommentsTotal setCurrentTab={setCurrentTab} />
            default:
                return <CommentsList productId={params.id} setCurrentTab={setCurrentTab} />
        }
    }
    return <>
        {pickUpTab(currentTab)}
    </>
};

CommentsTabs.displayName = 'comments tabs';

export default CommentsTabs;