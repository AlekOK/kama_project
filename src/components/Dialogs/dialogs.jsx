import React from 'react';
import sss from './dialogs.module.css';
import Message from './Message/message';
import Dialogs_Item from './DialogItem/dialogitem';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../Common/FormsControls/formControlsTextArea';
import { required, maxLegnthCreator } from '../../utils/validators';


const Dialogs = (props) => {
    
let dialog_elements = props.dialogsPage.dialog_data.map (el => <Dialogs_Item id={el.id} key={el.id} name={el.name} />)  ;  
let message_elements = props.dialogsPage.message_data.map (el => <Message message={el.message} key={el.id} /> ); 


let addNewTextMessage = (values) => {
    props.addNewMessage(values.newMessageText)
};

     return (

        <div className={sss.dialogs}>

            <div className={sss.dialog_item}>
                {dialog_elements}
            </div>

            <div className={sss.messages}>
               { message_elements}
            </div>
        
            <AddMessageReduxForm onSubmit= {addNewTextMessage} /> 

        </div>

    )
};

const maxLength20 = maxLegnthCreator(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit}>
            <div className={sss.postBlock}>
                <Field component= {Textarea} 
                       name= {"newMessageText"}
                       validate= {[required, maxLength20]} 
                       placeholder= {"Add your messages"}/>
            </div>
            <div><button>Send message</button></div> 
        </form>
    )

};

const AddMessageReduxForm = reduxForm({form: "message"})(AddMessageForm);

export default Dialogs; 