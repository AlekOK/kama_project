import React, { useState } from 'react';
import sss from './profileInfo.module.css';
import { useEffect } from 'react';

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
   
    let [status, setStatus] = useState(props.status);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {setStatus(props.status)}, [props.status]);

    return (
        <div>
            { ! editMode &&
                <div className= {sss.statusText}>
                    <span onDoubleClick= {activateEditMode}>{ props.status || "Edit your status!!!"}</span>
                </div>}

                { editMode &&
                <div className= {sss.statusInput}>
                    <input autoFocus={true}
                           value= {status}
                           onChange= {onStatusChange}   
                           onBlur= {deactivateEditMode}/>
            </div>}
        </div>
    )
};

export default ProfileStatusWithHook;