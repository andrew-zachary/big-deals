import React from 'react';
import { Link } from 'react-router-dom';

const Appreciate = ({t}) => {
    return <div id='appreciate' className='text-center'>
        <h1 className='bd-font-base p-2 font-regular text-6xl capitalize'>
            {t('review.thank_you.label')}
        </h1>
        <Link to='/shopping' className='bd-font-compo inline-block mt-8 font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize'>{t('review.thank_you.btn')}</Link>
    </div>
};

Appreciate.displayName = 'appreciate feedback';

export default Appreciate;