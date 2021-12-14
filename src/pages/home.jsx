import React from 'react';

const HomePage = () => {
    return <div id="home-page" className='content-page flex flex-col items-center justify-center'>
        <h1 className="text-home-brand text-primary uppercase font-bold">
            big deals
        </h1>
        <button className='text-4xl bg-primary shadow-primary text-white px-8 py-4 rounded-full'>start browsing</button>
    </div>
}

export default HomePage;