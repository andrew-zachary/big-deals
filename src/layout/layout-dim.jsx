import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';

const LayoutDim = () => {
    const {toggle} = useSelector(state=>state.app.sideMenu);
    const dimRef = useRef();
    useEffect(()=>{
        dimRef.current.style.visibility = 'hidden';
    }, []);
    useEffect(()=>{
        if(toggle){
            dimRef.current.classList.remove('hide');
            dimRef.current.classList.add('show');
        } else {
            dimRef.current.classList.remove('show');
            dimRef.current.classList.add('hide');
        }
    }, [toggle]);
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

LayoutDim.displayName = "layout default dim";

export default LayoutDim;