import React, {useState} from 'react';
import sss from './profileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import ProfileStatusWithHook from './profileStatusWithHook';
import noob from '../../../assets/images/users.jpg';
import ProfileDataForm from './profileDataForm';
// import ProfileDataFormRedux from './profileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...props}) => {

    let  [editMode, setEditMode] = useState(false);

    if ( !profile ) {
        return <Preloader/>
    }

    const onChangePhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        // setEditMode(false);
    }

    return (
       
        <div>
             <br></br>
            <div style= {{backgroundColor: 'white'}}>
                {profile.fullName}
            </div>

            <br></br>
          <ProfileStatusWithHook status= {<b>My status:  {status}</b>}  updateStatus= {updateStatus}/>
            
            <br></br>
            <div >
              <img src= { profile.photos.large || noob } className={sss.mainFoto}></img>
            </div>

            <div className= {sss.largePhoto}>
              { isOwner && <input type= {"file"} onChange= {onChangePhoto}/> }
            </div>

            { editMode
                ? <ProfileDataForm  initialValues= {profile} profile= {profile} onSubmit= {onSubmit}/>
                : <ProfileData profile= {profile}
                               status= {status}
                               isOwner= {isOwner}
                               goToEditMode= {() => {setEditMode(true)} } />}

        </div>    
    )
}

const ProfileData = ({profile, status, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick= {goToEditMode}>Edit</button></div>}
            <div>
                <b>Full name: {profile.fullName}</b>
            </div>
            <div>
                <b>Looking for a job: {profile.lookingForAJob? "yes": "no"}</b>
            </div>
            <div>
                {profile.lookingForAJob && <b>My skills: {profile.lookingForAJobDescription} </b>}
            </div>
            <div>
                <b>Status: {status}</b>
            </div>
            <div>
                <b>About Me: {profile.aboutMe}</b>
            </div>
           
            <div>
                <b>Contacts: {Object.keys(profile.contacts).map(key => { 

                    if (key == "facebook" || key =="website" || key == "github") {
                        
                    return <Contact key= {key} contactTitle={key} contactValue= {profile.contacts[key]}/>
            }})}</b>
            </div>
        </div>    
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}: {contactValue}</b>
        </div>
    )
}


export default ProfileInfo; 
