import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
    return <div id='admin-page' className='h-full overflow-y-auto'>
        <div id='admin-page_content' className='h-full pt-4'>
            <Outlet />
        </div>
    </div>
};

AdminPage.displayName = "admin page";

export default AdminPage;