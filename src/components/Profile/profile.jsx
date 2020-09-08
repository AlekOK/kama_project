import React from 'react';
import sss from './profile.module.css';
import ProfileInfo from './ProfileInfo/profileInfo';
import MypostsContainer from './mypostsContainer';




const Profile = (props) => {
  
    return (
        <div className = {sss.profile}>
            <ProfileInfo profile= {props.profile} status= {props.status}  updateStatus= {props.updateStatus}/> 
            <MypostsContainer/>
            
        </div>
    )
};

export default Profile; 
