import React from 'react';

const FormInput = ({id, name, type, label}) => {
    const groupStyle = 'group my-[4.5rem] relative';
    const inputStyle = 'bg-transparent text-primary text-[1.8rem] block w-full border-0 rounded-none border-b border-primary-dim focus:outline-transparent';
    const labelStyle = 'text-[2.5rem] capitalize font-ssp font-regular absolute pointer-events-none top-[1rem] ease-in-out duration-300';
    const barStyle = 'bar relative block w-full';
    return <div className={groupStyle}>
        <input className={inputStyle} id={id} name={name} type={type} required />
        <span className={barStyle}></span>
        <label className={labelStyle} htmlFor={id}>{label}</label>
    </div>
};

export default FormInput;