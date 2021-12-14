import React from 'react';

const HomePage = () => {
    return <div id="home-page" className='content-page flex flex-col items-center justify-center'>
        <h1 className="font-mont font-light text-home-brand-res xs:text-home-brand text-black uppercase font-bold tracking-widest">
            big deals
        </h1>
        <h2 className='font-mont font-regular text-3xl my-3'>
            all deals, all your needs
        </h2>
        <button className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize'>open your cart</button>
    </div>
}

export default HomePage;