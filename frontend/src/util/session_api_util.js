import axios from 'axios';

export const setAuthToken = token => {
    if(token){ //log-in header
        axios.defaults.headers.common["Authorization"] = token;
    }else{ // remove headers when user logs out
        delete axios.defaults.headers.common["Authorization"];
    }
}

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};