import React, {useState, useEffect, useContext, useRef} from 'react';
import { layoutContext, layoutActions } from './context.js';
import LoginForm from '../pages/login-form.jsx';
import RegisterForm from '../pages/register-form.jsx';
import MenuCloseBtn from '../components/side-menu/close-btn.jsx';

const LayoutSideMenu = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const {state, dispatch} = useContext(layoutContext);
    const navRef = useRef();
    useEffect(()=>{
        navRef.current.style.width = state.menu.toggle?`${100}%`:`${0}px`;
    }, [state.menu.toggle]);
    return <nav id="bd-app-nav" className='relative max-w-lg z-9999 bg-white' ref={navRef}>
        <header className='flex items-center justify-end'>
            <MenuCloseBtn state={state} dispatch={dispatch} layoutActions={layoutActions} />
        </header>
        <main className='p-4 text-center overflow-y-scroll'>
            { currentForm === 'login'?<LoginForm setCurrentForm={setCurrentForm} />:<RegisterForm setCurrentForm={setCurrentForm} /> }
        </main>
    </nav>
}

export default LayoutSideMenu;