import React from 'react';
import sss from './formControlTextArea.module.css';

export const Textarea = ({input, meta, ...props}) => {

const errorStyle = meta.touched && meta.error;

    return (
        <div className= {sss.formControl + " " +  (errorStyle ? sss.error : " ")}>
            <div >
                <textarea {...input} {...props} />
            </div>
            { errorStyle && <span>{meta.error}</span>}
        </div>
    )
};

export const Input= ({input, meta, ...props}) => {

    const errorStyle = meta.touched && meta.error;
    
        return (
            <div className= {sss.formControl + " " +  (errorStyle ? sss.error : " ")}>
                <div >
                    <input {...input} {...props} />
                </div>
                { errorStyle && <span>{meta.error}</span>}
            </div>
        )
    };