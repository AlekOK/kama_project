import React from 'react';
import sss from './../dialogs.module.css';

const Message = (props) => {
    return (
        <div className={sss.dialog +' '+ sss.active}>
            <div className={sss.dialog}>{props.message}</div>
        </div>    
        );
    };

    export default Message; 