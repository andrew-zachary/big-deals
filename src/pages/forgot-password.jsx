import React, {useState} from 'react';
import BDFormInput from '../components/form/input.jsx';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(null);
    const sendHandler = (input) => {
        setEmailErr(null);
        if(input.length === 0) {
            return setEmailErr('email is needed')
        }
        if(!input.toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return setEmailErr('please enter valid email');
        }
    };
    return <div className='mt-[-9rem]'>
        <form action='#'>
            <BDFormInput id="email" name="email" type="email" label="email" htmlInput={true} htmlInputErr={emailErr} value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={null} errors={null} touched={null} />
        </form>
        <div id="reset-ctrls" className='flex justify-between'>
            <button className='font-ssp font-regular text-3xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize w-full' onClick={()=>sendHandler(email)}>send reset password email</button>
        </div>
    </div>
};

ForgotPassword.displayName = 'forgot password';

export default ForgotPassword;