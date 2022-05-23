import React from 'react';
import { Link } from 'react-router-dom';
import { FaKey, FaHeart } from 'react-icons/fa';
import SimpleBar from 'simplebar-react';

const AdminHome = () => {
    return <section id='admin-links' className='h-full mx-auto px-4'>
        <SimpleBar>
            <ul className='p-6'>
                <li className='bg-primary dark:bg-primary-dark shadow-secondary rounded-[0.4rem]'>
                    <Link to='change-password' className='h-full px-4 flex flex-col justify-center items-center font-ssp font-regular text-center text-5xl text-white capitalize'>
                        <span className='font-light'>change password</span>
                        <FaKey className='mt-8 text-5xl' />
                    </Link>
                </li>
                <li className='bg-primary dark:bg-primary-dark shadow-secondary rounded-[0.4rem]'>
                    <Link to='app-preferences' className='h-full px-4 flex flex-col justify-center items-center font-ssp font-regular text-center text-5xl text-white capitalize'>
                        <span className='font-light'>app preferences</span>
                        <FaHeart className='mt-8 text-5xl' />
                    </Link>
                </li>
            </ul>
        </SimpleBar>
    </section>
};

AdminHome.displayName = 'admin home page';

export default AdminHome;