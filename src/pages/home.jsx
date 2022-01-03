import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import { layoutContext, layoutActions } from '../layout/context';

const HomePage = () => {
    const {dispatch} = useContext(layoutContext);
    useEffect(()=>{
        dispatch({type: layoutActions.TOGGLE_FOOTER_SHOW, payload: {toggle:true}});
        return () => {
            return dispatch({type: layoutActions.TOGGLE_FOOTER_SHOW, payload: {toggle:false}});
        }
    }, []);
    return <div id="home-page" className='content-page flex flex-col items-center justify-center'>
        <h1 className="font-mont font-light text-home-brand-res xs:text-home-brand text-black uppercase font-bold tracking-widest">
            big deals
        </h1>
        <h2 className='font-mont font-regular text-3xl my-3'>
            all deals, all your needs
        </h2>
        <Link className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' to="/shopping" path="shopping">shopping now</Link>
    </div>
}

export default HomePage;