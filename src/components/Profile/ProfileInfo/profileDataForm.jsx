import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../Common/FormsControls/formControlsTextArea';
import stl from './profileInfo.module.css';
import style from '../../Common/FormsControls/formControlTextArea.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form submit= {handleSubmit}>
            <div><button onClick= {handleSubmit}>Save</button></div>
            {error && <div className= {style.formCommonError}>{error}</div>}
            <div>
                <b>Full name: <Field name= "fullName"   
                                     type= "text" 
                                     placeholder= "Type your name" 
                                     component= {Input}/></b>
            </div>
            <div>
                <b>Looking for a job: <Field name= "lookingForAJob" 
                                             type={"checkbox"} 
                                             component={Input}/></b>
            </div>
            <div>
                <b>My skills: <Field name= "lookingForAJobDescription"     
                                     type={"text"} 
                                     placeholder= {"Type your skills"} 
                                     component={Input}/></b>
            </div>
            <div>
                <b>About Me: <Field name= "aboutMe"     
                                     type={"text"} 
                                     placeholder= {"Type your skills"} 
                                     component={Input}/></b>
            </div>
            <br></br>
            <div>
                <b>Contacts : </b> {Object.keys(profile.contacts).map(key => { 
                 
                 if (key == "facebook" || key =="website" || key == "github") {
                     
                    return <div key= {key} className= {stl.contact}>
                        <b>{key}:</b> {<Field name= {"contacts." + key}     
                                              type= {"text"} 
                                              placeholder= {key  } 
                                              component= {Input}/>}
                        </div>
                }})  }
           </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({form: 'profileEdit'})(ProfileDataForm);

export default ProfileDataFormRedux;
