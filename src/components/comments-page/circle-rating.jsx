import React, {useLayoutEffect, useRef} from 'react';

const CircleRating = ({amount}) => {
    const ratingCircle = useRef(null);
    useLayoutEffect(()=>{
        const totalLength = ratingCircle.current.getTotalLength();
        const lengthToAnimate = totalLength - (100*(amount/5));
        ratingCircle.current.setAttribute('stroke-dasharray', totalLength);
        ratingCircle.current.setAttribute('stroke-dashoffset', lengthToAnimate);
    }, []);
    return <svg className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-full w-full" viewBox="0 0 36 36">
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeLinecap="round" stroke="#fcd6b0" strokeWidth="1" fill="none" strokeDasharray="100, 100" />
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            id="rating-circle"
            ref={ratingCircle} 
            strokeLinecap="round" 
            stroke="var(--primary)" 
            strokeWidth="1" 
            fill="none"
            strokeDashoffset="100"
        />
    </svg>
};

CircleRating.displayName = "circle rating";

export default CircleRating;