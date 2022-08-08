import React from 'react';
import { useTranslation } from 'react-i18next';

const BDFormInput = ({htmlInput, htmlInputErr, id, name, type, label, labelTxtTrans, value, onChange, onBlur, errors, touched}) => {
    const {t} = useTranslation();
    const groupStyle = 'group my-[4.5rem] relative';
    const inputStyle = 'bd-font-base text-primary dark:text-white text-[1.8rem] block w-full border-0 rounded-none border-b border-primary-dim dark:border-white bg-transparent';
    const labelStyle = 'bd-font-compo text-[2rem] text-black dark:text-white font-regular absolute pointer-events-none top-[1rem] ease-in-out duration-300' + ' ' + labelTxtTrans;
    const barStyle = 'bar relative block w-full';
    return <>
        { !htmlInput && <div className={groupStyle}>
            <input className={inputStyle} id={id} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} />
            <span className={barStyle}></span>
            <label className={labelStyle} htmlFor={id}>{t(label)}</label>
            { errors[name] && touched[name] && <div className='bd-font-base error text-red-600 text-3xl mt-4'>
                    * {t(errors[name])}
                </div>
            }
        </div> }
        { htmlInput && <div className={groupStyle}>
            <input className={inputStyle} id={id} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} />
            <span className={barStyle}></span>
            <label className={labelStyle} htmlFor={id}>{t(label)}</label>
            <div className='bd-font-base error text-red-600 text-3xl mt-4'>
                {t(htmlInputErr)}
            </div>
        </div> }
    </>
};

BDFormInput.displayName = 'form input';

export default BDFormInput;