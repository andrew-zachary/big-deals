import React, {useState} from 'react';

import OrderTabs from '../components/orders/orders-tabs.jsx';

const Orders = () => {
    const [currentTab, setCurrentTab] = useState('');
    return <div id='orders-wrapper'>
        <div className='bills-btns flex justify-around'>
            <button onClick={()=>setCurrentTab('older')} className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-4'>older</button>
            <button onClick={()=>setCurrentTab('current')} className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-4'>current</button>
        </div>
        <OrderTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
};

Orders.displayName = 'order page';

export default Orders;