import React, {useEffect, useContext, useRef} from 'react';
import FormInput from '../components/form/input.jsx';
import { layoutContext, layoutActions } from './context.js';
import { FaTimes } from 'react-icons/fa';

const LayoutSideMenu = () => {
    const {state, dispatch} = useContext(layoutContext);
    const navRef = useRef();
    useEffect(()=>{
        navRef.current.style.width = state.menu.toggle?`${100}%`:`${0}px`;
    }, [state.menu.toggle]);
    return <nav id="bd-app-nav" className='relative max-w-lg z-9999 overflow-hidden bg-white' ref={navRef}>
        <header className='flex items-center justify-end'>
            <button className='p-4' onClick={()=>dispatch({type: layoutActions.TOGGLE_MENU, payload: !state.menu.toggle})}>
                <FaTimes className='text-6xl text-primary' />
            </button>
        </header>
        <main className='p-4 text-center'>
            <div id="img-frame" className='inline-block rounded-full overflow-hidden border shadow-secondary border-primary'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvvbFRDiGafT0jv4FFSmirNyaLuQ_obm_P8JMel822HZeVWimCbRf8rh71cc&s" className='max-w-[11.5rem]' alt="" />
            </div>
            <form action="#">
                <FormInput id="email" name="email" type="text" label="email" />
                <FormInput id="password" name="password" type="password" label="password" />
                <button className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] uppercase w-full'>login</button>
            </form>
        </main>
    </nav>
}

export default LayoutSideMenu;