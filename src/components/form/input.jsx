import React from 'react';

const BDFormInput = ({htmlInput, htmlInputErr, id, name, type, label, value, onChange, onBlur, errors, touched}) => {
    const groupStyle = 'group my-[4.5rem] relative';
    const inputStyle = 'bg-transparent text-primary text-[1.8rem] block w-full border-0 rounded-none border-b border-primary-dim focus:outline-transparent';
    const labelStyle = 'text-[2rem] text-black capitalize font-ssp font-regular absolute pointer-events-none top-[1rem] ease-in-out duration-300';
    const barStyle = 'bar relative block w-full';
    return <>
        { !htmlInput && <div className={groupStyle}>
            <input className={inputStyle} id={id} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} />
            <span className={barStyle}></span>
            <label className={labelStyle} htmlFor={id}>{label}</label>
            { errors[name] && touched[name] && <div className='error text-red-600 text-3xl mt-4'>
                    * {errors[name]}
                </div>
            }
        </div> }
        { htmlInput && <div className={groupStyle}>
            <input className={inputStyle} id={id} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} />
            <span className={barStyle}></span>
            <label className={labelStyle} htmlFor={id}>{label}</label>
            <div className='error text-red-600 text-3xl mt-4'>
                {htmlInputErr}
            </div>
        </div> }
    </>
};

BDFormInput.displayName = 'form input';

export default BDFormInput;