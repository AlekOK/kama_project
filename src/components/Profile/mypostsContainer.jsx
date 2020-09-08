import React from 'react';
import { addPostAction} from '../../redux/profile_reducer';
import Myposts from './Posts/myposts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        post_data: state.profilePage.post_data,
        newPostText: state.profilePage.newPostText
    }
}

let mapDistpatchToProps = (dispatch) => {
    return {
        addPostAction: (newPostText) => {
            dispatch(addPostAction(newPostText));
        }
    }
}

const MypostsContainer = connect(mapStateToProps, mapDistpatchToProps)(Myposts);

export default MypostsContainer; 
