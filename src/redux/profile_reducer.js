import { stopSubmit } from 'redux-form';
import { profileAPI } from '../API/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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

    } else if (action.type === SAVE_PHOTO_SUCCESS) {
        let copyState= {...state, profile: {...state.profile, photos: action.photos}};
   
    return copyState;
}
    
    return state;
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE,  profile});
export const addPostAction = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status});
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos});

export const getUser = (userId) => async (dispatch) => {
    
    let response = await profileAPI.getSomeoneUser(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
   
    let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
        }
};

export const savePhoto = (file) => async (dispatch) => {
    
    let response = await profileAPI.updatePhoto(file);
        if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
        }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    
    const userId = getState().profilePage.profile.userId

    const response = await profileAPI.updateProfile(profile);
    
        if (response.data.resultCode === 0) {
        dispatch(getUser(userId));
        } else {
            dispatch(stopSubmit("profileEdit", {"contacts": {"facebook": response.data.messages[0]} }))
            return Promise.reject(response.data.messages[0]);
        }
};

export default profileReducer ;