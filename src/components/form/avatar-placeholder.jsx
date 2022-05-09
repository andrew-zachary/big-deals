import React from 'react';

const AvatarPlaceholder = ({avatar, placeholderImg}) => {
    return <div 
        id="avatar-placeholder" 
        className='border border-primary flex justify-center items-center w-full overflow-hidden mx-auto shadow-secondary'
        style={{backgroundImage: `url(${avatar.length > 0?avatar:placeholderImg})`}}
    >
    </div>
};

AvatarPlaceholder.displayName = 'avatar placeholder';

export default AvatarPlaceholder;