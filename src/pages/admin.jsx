import React from 'react';
import { useDispatch } from 'react-redux';

import ChangePasswordForm from '../components/admin/change-password-form.jsx';

const AdminPage = () => {
    const dispatch = useDispatch();
    return <div id='admin-page' className='h-full overflow-y-auto'>
        <div id='admin-page_content' className='grid'>
            <section id='change-password' className='mt-8 p-4 font-ssp w-full'>
                <h1 className='text-5xl capitalize'>change password</h1>
                <ChangePasswordForm dispatch={dispatch} />
            </section>
        </div>
    </div>
};

AdminPage.displayName = "admin page";

export default AdminPage;