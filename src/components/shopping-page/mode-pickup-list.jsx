import React from "react";

const ModePickupList = ({showModeList, setPickedMode}) => {
    const pickingModes = [
        {value: 'deals', header: 'search deals', desc: 'every day new deal is out ... '},
        {value: 'products', header: 'search products', desc: 'browse all products'}
    ];
    return <>
        {
            showModeList && <ul id="mode-pickup-list" className="w-full block border-primary dark:border-primary-dark border-x border-b-4">
                {
                    pickingModes.map(mode => {
                        return <li key={mode.value} className="cursor-pointer mt-4 capitalize hover:bg-primary dark:hover:bg-primary-dark hover:text-white" onClick={()=>setPickedMode(mode.value)}>
                            <h1 className="text-3xl">{mode.header}</h1>
                            <h2 className="text-2xl">{mode.desc}</h2>
                        </li>
                    })
                }
            </ul>
        }
    </> 
};

export default ModePickupList;