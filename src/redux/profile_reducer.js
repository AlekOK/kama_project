import { profileAPI } from '../API/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState =  {        
    post_data:
        [{ id: 1, message: "Hi, how are you?", likeCount: 10 },
        { id: 2, message: "Hi, how are you?", likeCount: 14 },
        { id: 3, message: "Hi, how are you?", likeCount: 26 },
        { id: 4, message: "Hi!", likeCount: 29 },
        { id: 5, message: "Yo!!!", likeCount: 32 },
        { id: 6, message: "Bla-bla-bla", likeCount: 82 }
        ],
    profile: null,
    status: 'Set your status, please!!!'
};

const profileReducer = (state= initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = action.newPostText;
        let copyState= {...state,
                       post_data: [...state.post_data, {id: 7, message: newPost}]};
      
        return copyState;

    } else if (action.type === SET_USER_STATUS) {
        let copyState= {...state, status: action.status};
       
        return copyState;    
    
    } else if (action.type === SET_USER_PROFILE) {
        let copyState= {...state, profile: action.profile};
       
        return copyState;
    }
    
    return state;
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE,  profile});
export const addPostAction = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status});

export const getUser = (userId) => {
    return (dispatch) => {
        profileAPI.getSomeoneUser(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        
            profileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    }
}

export default profileReducer ;