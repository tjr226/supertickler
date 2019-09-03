import Axios from 'axios';
// Axios.defaults.withCredentials = true;

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = creds => dispatch => {
    dispatch({ type: SIGNUP_START });
    return Axios.post('localhost:5000/api/auth/register', creds)
        .then(res => {
            // console.log("response is, SIGNUP code");
            console.log(res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id)
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token })
        })
        .catch(err => {
            console.log(err);
        })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return Axios.post('localhost:5000/api/auth/login', creds)
        .then(res => {
            console.log("login start response");
            console.log(res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        })
        .catch(err => {
            console.log(err);
        })
}

