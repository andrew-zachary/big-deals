import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Authed = ({Component}) => {
    const {isAuthed, userType} = useSelector(state=>state.user);
    const [destination, setDestination] = useState(false);

    useEffect(()=> {
        if(userType === undefined) {
            setDestination(<p>processing ...</p>)
        } else if(userType === 'user' && isAuthed) {
            setDestination(<Component />);
        } else {
            setDestination(<Navigate to='/' replace />);
        }
    }, [userType]);

    return <>
        {destination}
    </>
};

export default Authed;