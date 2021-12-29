import React from 'react';
import { Link } from 'react-router-dom';

const Appreciate = () => {
    return <div id='appreciate' className='text-center'>
        <h1 className='p-2 font-ssp font-medium text-6xl capitalize'>
            thank you for your valuable feedback
        </h1>
        <Link to='/shopping' className='inline-block mt-8 font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize'>continue</Link>
    </div>
};

Appreciate.displayName = 'appreciate feedback';

export default Appreciate;