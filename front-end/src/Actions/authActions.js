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
    // console.log("show all creds", creds);
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

export const SHOW_20_START = 'SHOW_20_START';
export const SHOW_20_SUCCESS = 'SHOW_20_SUCCESS';
export const SHOW_20_FAILURE = 'SHOW_20_FAILURE';

export const show20Auth = creds => dispatch => {
    dispatch({ type: SHOW_20_START });
    axiosWithAuth().get('http://localhost:5000/api/tasks/get_twenty')
        .then(res => {
            dispatch({ type: SHOW_20_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: SHOW_20_FAILURE, payload: err })
        })
}

export const CREATE_TASK_START = 'CREATE_TASK_START';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';

export const createTaskAuth = form_input => dispatch => {
    // console.log("task text is", task_text);
    // console.log("creds are", creds);
    console.log("form input is", form_input);
    console.log("in create task auth action");
    const task_text = { task_text: form_input }
    dispatch({ type: CREATE_TASK_START });
    axiosWithAuth().post('http://localhost:5000/api/tasks/', task_text)
        .then(res => {
            dispatch({ type: CREATE_TASK_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: CREATE_TASK_FAILURE, payload: err })
        })
}