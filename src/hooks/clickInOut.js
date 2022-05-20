import { useState, useEffect, useCallback } from 'react';

const useClickInOut = (triggerClass, outElement) => {
    const [triggerClicked, setTriggerClicked] = useState(false);

    const handleClickInOut = useCallback((e)=>{
        if(e.target.classList.contains(triggerClass)) {
            setTriggerClicked((value) => !value);
        } else {
            setTriggerClicked(false);
        }
    }, []);

    useEffect(()=>{
        outElement.addEventListener('click', handleClickInOut);
        return ()=>outElement.removeEventListener('click', handleClickInOut);
    },[]);

    return [triggerClicked];
}

export default useClickInOut;