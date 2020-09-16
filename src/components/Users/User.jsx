import React from 'react';
import stl from './users.module.css';
import noob from '../../assets/images/users.jpg';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    debugger;    
    return (
      
        <div className={stl.users}>

        <span>
            <div>
                <NavLink to= {'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : noob} className={stl.foto} />
                </NavLink>
            </div>
            <div >
                {user.followed  
                    ? <button disabled= {followingInProgress.some(id => id === user.id)} 
                              className={stl.buttonFoll} onClick={() => {unfollow(user.id)}}>Unfollow</button>
                    : <button disabled= {followingInProgress.some(id => id === user.id)} className={stl.buttonUnfoll} onClick={() => { 
                    follow( user.id)}}>Follow</button>
                }
            </div>
        </span>

        <span>
            <span >
                <div className={stl.info} className={stl.in}>{user.name}</div>
                <div className={stl.info}>{user.status}</div>
            </span>

            <span>
                <div className={stl.info}>{"el.location"}</div>

            </span>

        </span>
        </div>
    )
   
};        

export default User;