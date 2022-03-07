import React, {useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import Cropper from "react-cropper";

import { userAvatarPicked } from '../../store/slices/user.js';

import AvatarInput from './avatar-input.jsx';
import AvatarPlaceholder from './avatar-placeholder.jsx';
import AvatarRemove from './avatar-remove.jsx';
import AvatarUpdate from './avatar-update.jsx';

const AvatarManager = ({avatar}) => {
    const cropperRef = useRef();
    const [mode, setMode] = useState("picking");
    const placeholderImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvvbFRDiGafT0jv4FFSmirNyaLuQ_obm_P8JMel822HZeVWimCbRf8rh71cc&s';
    const dispatch = useDispatch();
    return <>
        { 
            mode === 'picking' && <>
                <AvatarPlaceholder setMode={setMode} avatar={avatar} placeholderImg={placeholderImg} />
                <AvatarInput setMode={setMode} dispatch={dispatch} userAvatarPicked={userAvatarPicked} />
            </>
        }
        {
            mode === 'editing' && <>
                <Cropper
                    src={avatar}
                    style={{ height: 400, width: "100%" }}
                    // Cropper.js options
                    initialAspectRatio={16 / 9}
                    guides={true}
                    ref={cropperRef}
                    minCropBoxWidth={200}
                    minCropBoxHeight={200}
                    dragMode='none'
                />
                <div id="avatar-ctrls" className='flex justify-between mx-auto'>
                    <AvatarRemove setMode={setMode} dispatch={dispatch} userAvatarPicked={userAvatarPicked} />
                    <AvatarUpdate cropperRef={cropperRef} setMode={setMode} dispatch={dispatch} userAvatarPicked={userAvatarPicked} />
                </div>
            </>
        }
    </>
};

AvatarManager.displayName = "avatar manager";

export default AvatarManager;