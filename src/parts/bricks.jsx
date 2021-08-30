import React, { useEffect, useRef } from "react";
import Bricks from 'bricks.js';

const ColcList = ({items}) => {
    const instance = useRef();
    useEffect(()=> {
        instance.current = Bricks({
            container: '.products-page-list',
            packed: 'data-packed',
            position:true,
            resize:true,
            sizes:[
                { columns: 1, gutter: 0 },
                { mq: '1024px', columns: 2, gutter: 0 },
                { mq: '1200px', columns: 3, gutter: 0 }
            ],
        });
        instance.current.pack();
    }, []);
    useEffect(() => {
        instance.current.update();
    }, [items]);
    return <></>;
};

export default ColcList;