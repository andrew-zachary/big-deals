import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    return <section id='admin-links' className='h-full max-w-screen-md mx-auto'>
        <ul className='grid justify-items-center pb-4'>
            <li className='bg-primary shadow-secondary rounded-[0.4rem]'>
                <Link to='change-password' className='h-full px-4 flex justify-center items-center font-ssp font-regular text-center text-5xl text-white capitalize'>
                    change password
                </Link>
            </li>
        </ul>
    </section>
};

AdminHome.displayName = 'admin home page';

export default AdminHome;