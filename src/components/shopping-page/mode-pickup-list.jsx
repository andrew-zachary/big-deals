import React from "react";

const ModePickupList = ({showModeList, setPickedMode}) => {
    return <>
        {
            showModeList === 'show' && <ul id="mode-pickup-list" className="w-full block border-primary border-x border-b-4">
                <li className="cursor-pointer mt-4 capitalize" onClick={()=>setPickedMode('deals')}>
                    <h1 className="text-3xl">search deals</h1>
                    <h2 className="text-2xl">every day new deal is out ... </h2>
                </li>
                <li className="cursor-pointer mt-4 text-2xl capitalize" onClick={()=>setPickedMode('products')}>
                    <h1 className="text-3xl">search products</h1>
                    <h2 className="text-2xl">browse all products</h2>
                </li>
            </ul>
        }
    </> 
};

export default ModePickupList;