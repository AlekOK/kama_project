import * as axios from 'axios';

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "7c787b8c-10ac-4ca0-bcb9-e0fb4079c7df"}
});

export const usersAPI = {

    getUsers(current_page= 1, page_size= 9) {
        return instans.get(`users?page=${current_page}&count=${page_size}`)
            .then(response => {return response.data})
    },

    changeFollow(id) {
        return instans.post(`follow/${id}`, {})
            .then(response=> {return response.data})
    },

    changeUnfollow(id) {
        return instans.delete(`follow/${id}`)
            .then(response=> {return response.data})
    },
};

export const profileAPI = {

    getSomeoneUser(userId) {
        return instans.get(`profile/` + userId);
    },
    
    getStatus(userId) {
        return instans.get(`profile/status/` + userId);
    },
    
    updateStatus(status) {
        return instans.put(`profile/status/`, {status} );
    },

    updatePhoto(photofile) {
        
        const formData = new FormData();
        formData.append("image", photofile);

        return instans.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'}
        });
    },

    updateProfile(profile) {
        return instans.put(`profile`, profile );
    }
};

export const authAPI = {

        setLogin() {
            return instans.get(`auth/me`);
        },
        
        login(email, password, rememberMe = false, captcha = null) {
            return instans.post(`auth/login`, {email, password, rememberMe, captcha});
        },

        logout() {
            return instans.delete(`auth/login`);
        }
};  

export const securityAPI = {

    getCaptchaUrl() {
        return instans.get(`security/get-captcha-url`);
    }
}

     
              

    

