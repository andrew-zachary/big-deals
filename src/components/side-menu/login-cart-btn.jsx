import React from 'react';

const LoginCart = ({currentForm, setCurrentForm}) => {
    return <>
        {
            currentForm === 'cart' && <button className='font-mont font-regular text-4xl capitalize px-4 py-2 border-2 border-primary rounded-full' onClick={()=>setCurrentForm('login')}>
                login
            </button>
        }
        {
            currentForm !== 'cart' && <button className='font-mont font-regular text-4xl capitalize px-4 py-2 border-2 border-primary rounded-full' onClick={()=>setCurrentForm('cart')}>
                open my cart
            </button>
        }
    </>
};

LoginCart.displayName = 'login cart';

export default LoginCart;