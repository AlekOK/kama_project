import React from 'react';
import sss from './myposts.module.css';
import Post from './Post/post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLegnthCreator } from '../../../utils/validators';
import { Textarea } from '../../Common/FormsControls/formControlsTextArea';

const Myposts = (props) => {

let post_elements = props.post_data.map(el => <Post message= {el.message} key= {el.id} likeCount= {el.likeCount} />);

let onAddPosts = (values) => {
    props.addPostAction(values.addNewPost);
};

    return (
        <div className={sss.postBlock}>
            <h3>My post</h3>
            
            <PostReduxForm onSubmit= {onAddPosts}/>

            <div className={sss.posts}>
                {post_elements}
            </div>
        </div>      
    )
};

const maxLength50 = maxLegnthCreator(50);

const PostForm = (props) => {

return (
        <form onSubmit= {props.handleSubmit}>

            <div>
                <Field component={Textarea} name= {"addNewPost"} validate= {[required, maxLength50]}/>
            </div>
            <div><button>Add post</button></div>
            
        </form>
    )
};

const PostReduxForm = reduxForm({form: "post"})(PostForm);

export default Myposts; 
