import React from 'react';
import { Link } from 'react-router-dom';
import { FaKey, FaHeart } from 'react-icons/fa';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';

const AdminHome = () => {
    const {t} = useTranslation();
    return <section id='admin-links' className='h-full mx-auto px-4'>
        <SimpleBar>
            <ul className='p-6'>
                <li className='bg-primary dark:bg-primary-dark shadow-secondary rounded-[0.4rem]'>
                    <Link to='change-password' className='h-full px-4 flex flex-col justify-center items-center font-regular text-center text-4xl text-white capitalize'>
                        <span className='bd-font-base font-regular'>{t('admin.change_password.label')}</span>
                        <FaKey className='mt-8 text-5xl' />
                    </Link>
                </li>
                <li className='bg-primary dark:bg-primary-dark shadow-secondary rounded-[0.4rem]'>
                    <Link to='app-preferences' className='h-full px-4 flex flex-col justify-center items-center font-regular text-center text-4xl text-white capitalize'>
                        <span className='bd-font-base font-regular'>{t('admin.app_preferences.label')}</span>
                        <FaHeart className='mt-8 text-5xl' />
                    </Link>
                </li>
            </ul>
        </SimpleBar>
    </section>
};

AdminHome.displayName = 'admin home page';

export default AdminHome;