import React from 'react';
import {useSelector} from 'react-redux';

const AvatarPlaceholder = () => {
    const {avatar} = useSelector(state=>state.user.userInfo.authId);
    return <div id="avatar-placeholder" className='border border-primary overflow-hidden rounded-full mx-auto shadow-secondary'>
        <img src={avatar.length > 0?avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvvbFRDiGafT0jv4FFSmirNyaLuQ_obm_P8JMel822HZeVWimCbRf8rh71cc&s'} />
    </div>
};

AvatarPlaceholder.displayName = 'avatar placeholder';

export default AvatarPlaceholder;