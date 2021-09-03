import React, {useRef, useEffect } from 'react';
import {fill} from 'lodash';

import starFill from '../assets/star-fill.svg';
import starOutline from '../assets/star-outline.svg';

const StarsCalc = ({avgRate}) => {
    const starNum = 5;
    const starsMask = useRef();
    useEffect(()=>{
        starsMask.current.style.width = Math.floor(Math.abs(((avgRate/starNum)*100)-100))+"%";
    }, []);
    return <div className="bd-stars-calc d-flex align-items-end w-100">
        <div className="stars-container">
            <ul className="stars-fill-row list-unstyled">
                {
                    fill(new Array(starNum), 0).map((_, index)=>{
                        return <li key={index} className="d-inline-block">
                            <img src={starFill} alt="" />
                        </li>
                    })
                }  
            </ul>
            <div ref={starsMask} className="stars-mask"></div>
            <ul className="stars-outline-row list-unstyled">
                {
                    fill(new Array(starNum), 0).map((_, index)=>{
                        return <li key={index} className="d-inline-block">
                            <img src={starOutline} alt="" />
                        </li>
                    })
                } 
            </ul>
        </div>
        <div className="value-container">({avgRate})</div>
    </div>
};

export default StarsCalc;