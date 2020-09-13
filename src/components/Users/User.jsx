import React from 'react';
import sss from './users.module.css';
import noob from '../../assets/images/users.jpg';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow, ...props}) => {
       
    return (
        
        <div className={sss.users}>

        <span>
            <div>
                <NavLink to= {'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : noob} className={sss.foto} />
                </NavLink>
            </div>
            <div >
                {user.followed  
                    ? <button disabled= {followingInProgress.some(id => id === user.id)} 
                              className={sss.buttonFoll} onClick={() => {unfollow(user.id)}}>Unfollow</button>
                    : <button disabled= {followingInProgress.some(id => id === user.id)} className={sss.buttonUnfoll} onClick={() => { 
                    follow( user.id)}}>Follow</button>
                }
            </div>
        </span>

        <span>
            <span >
                <div className={sss.info} className={sss.in}>{user.name}</div>
                <div className={sss.info}>{user.status}</div>
            </span>

            <span>
                <div className={sss.info}>{"el.location"}</div>

            </span>

        </span>
        </div>
    )
   
};        

export default User;