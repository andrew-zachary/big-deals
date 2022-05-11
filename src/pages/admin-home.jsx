import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    return <section id='admin-links' className='h-full'>
        <ul className='h-full grid justify-items-center items-center'>
            <li className='my-8'>
                <Link to='change-password' className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize'>
                    change password
                </Link>
            </li>
        </ul>
    </section>
};

AdminHome.displayName = 'admin home page';

export default AdminHome;