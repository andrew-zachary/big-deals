import React, {useState} from 'react';

import OrderTabs from '../components/orders/orders-tabs.jsx';

const Orders = () => {
    const [currentTab, setCurrentTab] = useState('all');
    return <>
        <h1 className='text-4xl capitalize font-mont font-regular'>my bills</h1>
        <OrderTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </>
};

Orders.displayName = 'order page';

export default Orders;