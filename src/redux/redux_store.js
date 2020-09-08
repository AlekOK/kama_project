import {  createStore, combineReducers, applyMiddleware  } from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app_reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    form: formReducer,
    auth: authReducer,
    app: appReducer
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// obj store is in global scope
// you can explore it
window.store = store;

export default store;