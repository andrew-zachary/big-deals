import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return <div id="home-page" className='content-page flex flex-col items-center justify-center'>
        <h1 className="font-mont font-light text-home-brand-res xs:text-home-brand text-black uppercase font-bold tracking-widest dark:text-white">
            big deals
        </h1>
        <h2 className='font-mont font-regular text-3xl my-3 dark:text-white'>
            all deals, all your needs
        </h2>
        <Link className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' to="/shopping" path="shopping">shopping now</Link>
    </div>
}

export default HomePage;