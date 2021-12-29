import React, {useState, useRef} from 'react';
import ReactStars from 'react-rating-stars-component';

const TellUs = ({setCurrentTab}) => {
    const [commentStars, setCommentStars] = useState(0);
    const commentTxt = useRef('');
    const sumitFeedback = () => {
        console.log(commentStars, commentTxt.current.value);
        setCurrentTab('thank');
    }
    return <div id="rate-in" className='text-center'>
        <ReactStars
            onChange={(value)=>setCommentStars(value)}
            count={5} 
            size={60} 
            edit={true} 
            isHalf={true}
            activeColor='#f68b1e'
            color='#f9ae6280'
        />
        <textarea ref={commentTxt} id="w3review" className='font-ssp font-medium text-4xl w-full border border-primary p-3 rounded-[0.4rem] focus:outline-primary' name="commentTxt" rows='7' cols='50' placeholder='your feedback is very important'>
        </textarea>
        <button onClick={()=>sumitFeedback()} className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 mt-6 rounded-[0.4rem] capitalize w-full max-w-[32rem]'>submit</button>
    </div>
};

export default TellUs;