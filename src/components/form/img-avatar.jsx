import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react'
import {FaCamera} from 'react-icons/fa'
import AvatarEditor from 'react-avatar-editor'

const ImgAvatar = forwardRef(({mode}, ref) => {
    const canvasRef = useRef();
    const [scale, setScale] = useState("100");
    const [imgFrame, setImgFrame] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvvbFRDiGafT0jv4FFSmirNyaLuQ_obm_P8JMel822HZeVWimCbRf8rh71cc&s')
    const handleImgRead = (event) => {
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onloadend = ()=> {
            setImgFrame(reader.result)
        }
    }
    useImperativeHandle(ref, ()=>({
        getUserAvatar() {
            return canvasRef
        }
    }));
    return <div id="img-avatar" className='relative'>
        {/* <div id="img-avatar_data" className='p-40 relative max-w-[11.5rem] max-h-[11.5rem] inline-block rounded-full overflow-hidden border shadow-secondary border-primary'>
            <img src={imgFrame} className='max-w-[11.5rem]' alt="" />
        </div> */}
        {
            mode === 'register' && <>
                <AvatarEditor
                    className='mx-auto'
                    ref={canvasRef}
                    image={imgFrame}
                    width={180}
                    height={180}
                    border={50}
                    color={[0, 0, 0, 0.6]} // RGBA
                    scale={parseFloat(scale)/100}
                    rotate={0}
                    crossOrigin="anonymous"
                    borderRadius={100}
                />
                <div id='img-avatar_ctrls'>
                    <label htmlFor='img-file' className='p-4 absolute bottom-[2.5rem] rounded-full bg-primary shadow-secondary inline-block'>
                        <input type='file' name='img-file' id='img-file' onChange={(e)=>handleImgRead(e)} hidden/>
                        <FaCamera className='text-white text-3xl' />
                    </label>
                </div>
            </>
        }
        <label htmlFor="img-scale" className='flex items-center justify-center pt-10'>
            <span className='text-[1.6rem] capitalize font-mont font-regular'>crop: </span>
            <input type='range' min='100' max='200' value={scale} className='slider' id='img-scale' name='img-scale' onChange={e=>setScale(e.target.value)} />
        </label>
    </div>
})

ImgAvatar.displayName = 'Img Avatar'

export default ImgAvatar