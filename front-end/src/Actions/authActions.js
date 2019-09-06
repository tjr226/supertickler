import Axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
    // console.log('creds', creds);
    // console.log("register happening in authActions");
    dispatch({ type: REGISTER_START });
    return Axios.post('http://localhost:5000/api/auth/register', creds)
        .then(res => {
            // console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: REGISTER_FAILURE, payload: err });
        })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    // console.log("login happening in authActions");
    dispatch({ type: LOGIN_START });
    return Axios.post('http://localhost:5000/api/auth/login', creds)
        .then(res => {
            // console.log(res.datas.token);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: LOGIN_FAILURE });
        })
}

export const FETCH_TASKS_START = 'FETCH_TASKS_START';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getData = creds => dispatch => {
    // console.log("getData happening");
    dispatch({ type: FETCH_TASKS_START })
    axiosWithAuth().get('http://localhost:5000/api/tasks')
        .then(res => {
            dispatch({ type: FETCH_TASKS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: FETCH_TASKS_FAILURE });
        })
}

export const HIDE_ALL_START = 'HIDE_ALL_START';
export const HIDE_ALL_SUCCESS = 'HIDE_ALL_SUCCESS';
export const HIDE_ALL_FAILURE = 'HIDE_ALL_FAILURE';

export const hideAllAuth = creds => dispatch => {
    // console.log("hiding all, authAction start");
    dispatch({ type: HIDE_ALL_START });
    axiosWithAuth().put('http://localhost:5000/api/tasks/hide_all')
        .then(res => {
            // console.log(res);
            dispatch({ type: HIDE_ALL_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: HIDE_ALL_FAILURE, payload: err })
        })
}

export const SHOW_ALL_START = 'SHOW_ALL_START';
export const SHOW_ALL_SUCCESS = 'SHOW_ALL_SUCCESS'; 
export const SHOW_ALL_FAILURE = 'SHOW_ALL_FAILURE';

export const showAllAuth = creds => dispatch => {
    dispatch({ type: SHOW_ALL_START });
    axiosWithAuth().put('http://localhost:5000/api/tasks/unhide_all')
        .then(res => {
            // console.log("showAllAuth res in Redux action", res)
            // console.log("showAllAuth res.data in Redux action", res.data)
            dispatch({ type: SHOW_ALL_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: SHOW_ALL_FAILURE, payload: err })
        })
}