import React, {useState} from 'react';

import axiosClient from '../../utilities/axiosClient.js';

const Loading = () => {
    const [loadingStarted, setLoadingStarted] = useState(false);
    axiosClient.interceptors.request.use((config)=>{
        if(config.layoutIdle) {
            setLoadingStarted(true);
        }
        return config;
    });
    axiosClient.interceptors.response.use((response)=>{
        setLoadingStarted(false);
        return response;
    }, (err)=>{
        setLoadingStarted(false);
        return err;
    });
    return <>
        { loadingStarted && <div id='loading' className='absolute top-0 left-0 z-9999 h-full w-full bg-white'>
            <div id='loading-box' className='absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]'>
                <h1 id='msg' className='capitalize text-4xl text-center font-mont font-regular'>please wait</h1>
                <div id='loader' className='mt-8'>
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>
        </div> }
    </>
};

Loading.displayName = 'Loading';

export default Loading;