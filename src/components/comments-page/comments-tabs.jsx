import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CommentsTotal from './comments-total.jsx';
import TellUsTabs from './tell-us-tabs.jsx';
import Appreciate from './appreciate.jsx';
import CommentsList from './comments-list.jsx';

const CommentsTabs = () => {
    const {t} = useTranslation();
    const [currentTab, setCurrentTab] = useState('total');
    const params = useParams();
    const pickUpTab = (currentTab) => {
        switch (currentTab) {
            case 'thank':
                return <Appreciate />
            case 'new':
                return <TellUsTabs productId={params.id} setCurrentTab={setCurrentTab} />
            case 'list':
                return <CommentsList productId={params.id} setCurrentTab={setCurrentTab} />
            case 'total':
                return <CommentsTotal t={t} setCurrentTab={setCurrentTab} />
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