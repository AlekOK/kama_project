import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'; 

let initialState =  {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case SET_AUTH_USER_DATA: 
      
            return {
               
                ...state,
                ...action.payloud
               
                }
        default:
            return state; 
    }
}

export const setAuthUserData = (email, id, login, isAuth) => ({   type: SET_AUTH_USER_DATA,  payloud: {email, id, login, isAuth}});   

export const authMe = () => {
    return (dispatch) =>{
        return authAPI.setLogin().then( response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data;
                dispatch(setAuthUserData(email, id, login, true));
            }
        });
    } 
}

export const logIn = (email, password, rememberMe) => {
    return (dispatch) =>{
        authAPI.login(email, password, rememberMe).then( response => {
            if (response.data.resultCode === 0) {
                dispatch(authMe());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", { _error: message } ))
            }
        });
    } 
}


export const logOut = () => {
    return (dispatch) =>{
        authAPI.logout().then( response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    } 
}





export default authReducer ;