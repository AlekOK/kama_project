import * as axios from 'axios';

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "7c787b8c-10ac-4ca0-bcb9-e0fb4079c7df"}
})

export const usersAPI = {

    getUsers(current_page= 1, page_size= 9) {
        return instans.get(`users?page=${current_page}&count=${page_size}`)
            .then(response=> {return response.data})
    },

    changeFollow(id) {
        return instans.post(`follow/${id}`, {})
            .then(response=> {return response.data})
    },

    changeUnfollow(id) {
        return instans.delete(`follow/${id}`)
            .then(response=> {return response.data})
    },
}


export const profileAPI = {
    getSomeoneUser(userId) {
        return instans.get(`profile/` + userId);
    },
    
    getStatus(userId) {
        return instans.get(`profile/status/` + userId);
    },
    
    updateStatus(status) {
        return instans.put(`profile/status/`, {status} );
    }
}

export const authAPI = {
        setLogin() {
            return instans.get(`auth/me`);
        },
        
        login(email, password, rememberMe = false) {
            return instans.post(`auth/login`, {email, password, rememberMe});
        },

        logout() {
            return instans.delete(`auth/login`);
        }
}          

     
              

    

