import React, {useState, useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';

import { apiStartCall } from '../../store/actions.js';
import { updateComment, newComment, getUserComment } from '../../store/end-points/comment.js';
import commentSchema from '../../validations/comment-schema.js';

const TellUsTabs = ({productId, setCurrentTab}) => {
    const dispatch = useDispatch();
    const commentTxt = useRef('');
    const {currentComment} = useSelector(state=>state.comment);
    useEffect(()=>{
        dispatch({ type: apiStartCall.type, payload: getUserComment(null, null, null, {productId})});
    }, []);
    //init inputs incase update (currentComment not null)
    useEffect(()=> {
        if(currentComment) {
            commentTxt.current.value = currentComment.body;
            setCommentStars(currentComment.rate);
        }
    }, [currentComment]);
    const [commentStars, setCommentStars] = useState(0);
    const [commentErrors, setCommentErrors] = useState({});
    const sumitFeedback = () => {
        setCommentErrors({});
        const result = commentSchema.validate({
            body: commentTxt.current.value,
            rate: commentStars
        }, {abortEarly: false});
        if(result.error !== undefined && result.error.details.length > 0) {
            let totalErrors = {};
            result.error.details.forEach((error, errorIndex, errors)=>{
                totalErrors[error['context']['label']] = error['message'];
                if(errorIndex === errors.length-1) {
                    setCommentErrors(totalErrors);
                }
            });
        } else {
            if(currentComment) {
                dispatch({type: apiStartCall.type, payload: updateComment({commentId: currentComment._id}, null, null, {
                    body: commentTxt.current.value,
                    rate: commentStars
                })});
            } else {
                dispatch({type: apiStartCall.type, payload: newComment(null, null, null, {
                    productId,
                    body: commentTxt.current.value,
                    rate: commentStars
                })});
            }
            setCurrentTab('thank');
        }
    }
    return <>
        {
            currentComment === null && <div id="rate-in" className='text-center'>
            <ReactStars
                onChange={(value)=>setCommentStars(value)}
                count={5} 
                size={60} 
                edit={true} 
                isHalf={false}
                activeColor='#f68b1e'
                color='#f9ae6280'
            />
                <div className='capitalize text-3xl text-red font-ssp font-bold mb-4 text-primary'>{ commentErrors.rate && `* ${commentErrors.rate}` }</div>
                <textarea ref={commentTxt} id="w3review" className='font-ssp font-medium text-4xl w-full border border-primary p-3 rounded-[0.4rem] focus:outline-primary' name="commentTxt" rows='7' cols='50' placeholder='tell us' />
                <div className='capitalize text-3xl text-red font-ssp font-bold mt-4 text-primary'>{ commentErrors.body && `* ${commentErrors.body}` }</div>
                <button onClick={()=>sumitFeedback()} className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 mt-6 rounded-[0.4rem] capitalize w-full max-w-[32rem]'>vote</button>
            </div>
        }
        {
            currentComment && <div id="rate-in" className='text-center'>
            <ReactStars
                onChange={(value)=>setCommentStars(value)}
                value={currentComment.rate}
                count={5} 
                size={60} 
                edit={true} 
                isHalf={false}
                activeColor='#f68b1e'
                color='#f9ae6280'
            />
                <div className='capitalize text-3xl text-red font-ssp font-bold mb-4 text-primary'>{ commentErrors.rate && `* ${commentErrors.rate}` }</div>
                <textarea ref={commentTxt} id="w3review" className='font-ssp font-medium text-4xl w-full border border-primary p-3 rounded-[0.4rem] focus:outline-primary' name="commentTxt" rows='7' cols='50' placeholder='tell us' />
                <div className='capitalize text-3xl text-red font-ssp font-bold mt-4 text-primary'>{ commentErrors.body && `* ${commentErrors.body}` }</div>
                <button onClick={()=>sumitFeedback()} className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 mt-6 rounded-[0.4rem] capitalize w-full max-w-[32rem]'>update</button>
            </div>
        }
    </>
};

TellUsTabs.displayName = 'tell us tabs';

export default TellUsTabs;