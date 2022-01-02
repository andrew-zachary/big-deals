import React from 'react';

const LoginCart = ({isAuthed, currentPage, setCurrentPage}) => {
    return <>
        {
            currentPage === 'cart' && <button className='font-mont font-regular text-4xl capitalize px-4 py-2 border-2 border-primary rounded-full' onClick={()=>setCurrentPage('user')}>
                {isAuthed?'profile':'login'}
            </button>
        }
        {
            currentPage !== 'cart' && <button className='font-mont font-regular text-4xl capitalize px-4 py-2 border-2 border-primary rounded-full' onClick={()=>setCurrentPage('cart')}>
                my cart
            </button>
        }
    </>
};

LoginCart.displayName = 'login cart';

export default LoginCart;