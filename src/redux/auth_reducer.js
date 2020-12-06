import { authAPI, securityAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'; 
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState =  {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case SET_AUTH_USER_DATA: 
        case GET_CAPTCHA_URL:
            return {
               
                ...state,
                ...action.payloud
               
                }

        default:
            return state; 
    }
};

export const setAuthUserData = (email, id, login, isAuth) => ({ type: SET_AUTH_USER_DATA,  payloud: {email, id, login, isAuth}});   

export const setCaptchaUrlAction = (captchaUrl) => ({ type: GET_CAPTCHA_URL,  payloud: {captchaUrl} });   

export const authMe = () => async (dispatch) => {
    
        let response = await authAPI.setLogin();

        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data;
            dispatch(setAuthUserData(email, id, login, true));
        }
}; 

export const logIn = (email, password, rememberMe, captcha) => async (dispatch) => {
    
    let response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(authMe());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaThunk());
            } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }))
        }
    }    
};

export const logOut = () => async (dispatch) => {
    
    let response = await authAPI.logout();
    
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
};

export const getCaptchaThunk = () => async (dispatch) => {
    
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl =  response.data.url;
            dispatch(setCaptchaUrlAction(captchaUrl));
}       

export default authReducer;