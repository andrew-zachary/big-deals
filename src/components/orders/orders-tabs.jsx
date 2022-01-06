import React from 'react';

import AllOrdersTab from './all-orders-tab.jsx';

const OrderTabs = ({currentTab, setCurrentTab}) => {
    const pickupTab = (currentTab) => {
        switch (currentTab) {
            case 'all':
                return <AllOrdersTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            default:
                return <h1>no orders found</h1>
        }
    }
    return <>
        {pickupTab(currentTab)}
    </>
};

OrderTabs.displayName = 'order tabs';

export default OrderTabs;