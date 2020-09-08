import React from 'react';
import sss from './../dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs_Item = (props) => {
    return (
        <div className = {sss.dialog }>
            <NavLink to={ "/messages/" + props.id } activeClassName={sss.activeLink}>{props.name}</NavLink>
        </div>
        );
};

export default Dialogs_Item; 