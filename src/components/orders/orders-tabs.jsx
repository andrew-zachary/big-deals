import React from 'react';

import OlderOrdersTab from './older-orders-tab.jsx';
import CurrentOrdersTab from './current-orders-tab.jsx';

const OrderTabs = ({currentTab, setCurrentTab}) => {
    const pickupTab = (currentTab) => {
        switch (currentTab) {
            case 'older':
                return <OlderOrdersTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            case 'current':
                return <CurrentOrdersTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            default:
                return <h1 className='mt-8 text-4xl capitalize font-regular'>review all your bills</h1>
        }
    }
    return <>
        {pickupTab(currentTab)}
    </>
};

OrderTabs.displayName = 'order tabs';

export default OrderTabs;