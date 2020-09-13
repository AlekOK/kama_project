import { usersAPI } from '../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'; 
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const GET_TOTAL_PAGE = 'GET_TOTAL_PAGE';
const TOGGEL_IS_FETCHING = 'TOGGEL_IS_FETCHING';
const TOGGEL_IS_FOLLOWING_PROGRESS = 'TOGGEL_IS_FOLLOWING_PROGRESS';

let initialState =  {
    users_data: [],
    page_size: 49,
    total_page: 200,
    current_page: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case FOLLOW: 
            return {
              ...state, 
              users_data: state.users_data.map( el => {
                if ( el.id === action.userId ) {
                    return { ...el, followed: true}
                }
                return el;
            })
        };
    
        case UNFOLLOW:
            return {
                ...state, 
                users_data: state.users_data.map( el => {
                    if ( el.id === action.userId ) {
                        return { ...el, followed: false}
                    }
                    return el;
                })
            };

        case SET_USERS: {
            return { ...state, users_data: action.users}
        };

        case  SET_CURRENT_PAGE: {
            return {...state, current_page: action.current_page}
        };

        case  GET_TOTAL_PAGE: {
            return {...state, total_page: action.totalPage}
        };

        case  TOGGEL_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        };

        case  TOGGEL_IS_FOLLOWING_PROGRESS: {
            return {...state, followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id!= action.userId)
            }
        };
        default:
            return state; 
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId}); 
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS,  users});
export const setCurrentPage = (current_page) => ({type: SET_CURRENT_PAGE,  current_page});
export const setTotalCount = (totalPage) => ({type: GET_TOTAL_PAGE,  totalPage});
export const setIsFetching = (isFetching) => ({type: TOGGEL_IS_FETCHING ,   isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGEL_IS_FOLLOWING_PROGRESS , isFetching, userId});



export const getUsersThunk = (current_page, page_size) => {

    return async (dispatch) => {
        dispatch(setIsFetching(true));

        let data = await usersAPI.getUsers(current_page, page_size);

        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }
};

export const  unfollow = (userId) => {

    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        let data = await usersAPI.changeUnfollow(userId);
        
        if (data.resultCode === 0)  {
            dispatch(unfollowSuccess(userId));
        }

        dispatch(toggleFollowingProgress(false, userId));
    }
};

export const  follow = (userId) => {

    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        let data = await usersAPI.changeFollow(userId);

        if (data.resultCode === 0)  {
            dispatch(followSuccess(userId));
        }
        
        dispatch(toggleFollowingProgress(false, userId));
    }
};

export default usersReducer ;