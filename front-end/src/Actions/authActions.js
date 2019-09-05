import Axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
    console.log('creds', creds);
    console.log("register happening in authActions");
    dispatch({ type: REGISTER_START });
    return Axios.post('http://localhost:5000/api/auth/register', creds)
        .then(res => {
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REGISTER_FAILURE, payload: err });
        })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    console.log("login happening in authActions");
    dispatch({ type: LOGIN_START });
    return Axios.post('http://localhost:5000/api/auth/login', creds)
        .then(res => {
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAILURE });
        })
}

export const FETCH_TASKS_START = 'FETCH_TASKS_START';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getData = creds => dispatch => {
    dispatch({ type: FETCH_TASKS_START })
    axiosWithAuth().get('http://localhost:5000/api/tasks')
        .then(res => {
            dispatch({ type: FETCH_TASKS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_TASKS_FAILURE });
        })
}