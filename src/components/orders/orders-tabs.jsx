import React from 'react';

import OlderOrdersTab from './older-orders-tab.jsx';
import CurrentOrdersTab from './current-orders-tab.jsx';

const OrderTabs = ({currentTab, t}) => {
    const pickupTab = (currentTab) => {
        switch (currentTab) {
            case 'older':
                return <OlderOrdersTab />
            case 'current':
                return <CurrentOrdersTab t={t} />
            default:
                return <h1 className='bd-font-base mt-8 text-4xl capitalize font-regular'>{t('orders.desc')}</h1>
        }
    }
    return <>
        {pickupTab(currentTab)}
    </>
};

OrderTabs.displayName = 'order tabs';

export default OrderTabs;