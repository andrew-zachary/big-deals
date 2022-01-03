import React, {useEffect, useContext, useRef} from 'react';
import { layoutContext } from './context.js';

const LayoutDim = () => {
    const {state} = useContext(layoutContext);
    const dimRef = useRef();
    useEffect(()=>{
        dimRef.current.style.visibility = 'hidden';
    }, []);
    useEffect(()=>{
        if(state.dim.toggle){
            dimRef.current.classList.remove('hide');
            dimRef.current.classList.add('show');
        } else {
            dimRef.current.classList.remove('show');
            dimRef.current.classList.add('hide');
        }
    }, [state.dim.toggle]);
    return <div
            ref={dimRef} 
            id="layout-dim"
            className='w-full h-full absolute z-9997 bg-black-600'
            onAnimationEnd={(e)=>{
                if(e.animationName === "dimFadeOut") {
                    dimRef.current.style.visibility = 'hidden';
                }
            }}
            onAnimationStart={(e)=>{
                if(e.animationName === "dimFadeIn") {
                    dimRef.current.style.visibility = 'visible';
                }
            }}
        ></div>
};

export default LayoutDim;