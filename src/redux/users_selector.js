export const getUsers = (state) => {
    return state.usersPage.users_data;
}

export const getUsers_data = (state) => {
    return state.usersPage.users_data;
}

export const getPage_size = (state) => {
    return state.usersPage.page_size;
}

export const getTotal_page = (state) => {
    return state.usersPage.total_page;
}

export const getCurrent_page = (state) => {
    return state.usersPage.current_page;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}