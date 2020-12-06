import React from 'react';
import {  Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/formControlsTextArea';
import { required, maxLegnthCreator } from '../../utils/validators';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';
import sss from "../Common/FormsControls/formControlTextArea.module.css";

const maxLength35 = maxLegnthCreator(35);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
            <form onSubmit= {handleSubmit}>
                
                <div>
                    <Field  name= "email" placeholder={"email"}  component={Input} 
                            type= 'text' validate= {[required, maxLength35]}/>
                </div>

                <div>
                    <Field  name= "password" placeholder={"Password"} component={Input} 
                            type= 'password' validate= {[required, maxLength35]}/>
                </div>

                <div>
                    <Field name= "rememberMe" type={"checkbox"} component= {Input}/> Remember me
                </div>

                { captchaUrl && <img src= {captchaUrl}/> }
                { captchaUrl && <Field  name= {"captcha"} placeholder={"symbols from image"} 
                                        component= {Input} type= 'text'/> }

                { error && <div className= {sss.formCommonError}>{error}</div>}

                <div>
                    <button>LOGIN</button>
                </div>
            </form>
    )
};

const LoginReducerForm = reduxForm({form: 'login'})(LoginForm);

const LoginPage = (props) => {
    
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to= {'/profile'}/>
    }

    return (
        <div >
            <h1 >LOGIN</h1>
            <LoginReducerForm onSubmit= {onSubmit} captchaUrl= {props.captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl 
    }
}; 

export default connect(mapStateToProps, {logIn})(LoginPage); 